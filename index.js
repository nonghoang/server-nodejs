import cluster from 'cluster'
import os from 'os'
import express from 'express'
import morgan from 'morgan'
import config from './config/config'
import drive from 'services/amqp'
import {
  subscribeCreateWallet,
  updateBalanceAccount
} from 'modules/blockchain'

if (cluster.isMaster) {
  const numWorkers = os.cpus().length
  console.log('numWorkers', numWorkers)

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal)
    console.log('Starting a new worker')
    cluster.fork()
  })

} else {
  const system = express()

  drive.connect().then((ch) => {
    drive.publish(config.channel.reqCreateWallet, 'Hello Hoang')

    subscribeCreateWallet()
    updateBalanceAccount()
    drive.subscribe(config.channel.resCreateWallet, (message) => {
      console.log('message', message);
    })
  })

  system.use(morgan('dev'))
  system.listen(config.serverPort, () => console.log(`Server listen to :${config.serverPort}`))
}
