import amqp from 'amqplib/callback_api'
import config from '../config/config'

const drive = {}

drive.connect = function() {
  return new Promise((resolve, reject) => {
    amqp.connect(config.amqpHost, (err, conn) => {
      if (err) {
        return reject(err)
      }

      conn.createChannel((err, ch) => {
        if (err) {
          return reject(err)
        }

        drive._channel = ch
        return resolve(ch)
      })
    })
  })
}

drive.publish = function(queue, message) {
  drive._channel.assertQueue(queue, {
    durable: false,
  })

  drive._channel.sendToQueue(queue, new Buffer(JSON.stringify(message)))
}

drive.subscribe = function(queue, callback) {
  drive._channel.consume(queue, (message) => {
    callback(message.content.toString())
  }, {noAck: true})
}

export default drive

