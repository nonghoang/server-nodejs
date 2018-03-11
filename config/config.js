import config from 'recursive-config'

export default config.load({
  defaults: {
    amqpHost: 'amqp://localhost',
    httpProvider: 'http://localhost:8545',
    channel: {
      reqCreateWallet: 'reqCreateWallet',
      resCreateWallet: 'resCreateWallet'
    },
    aws: {
      region: 'ap-southeast-1',
      credentials: {
        accessKeyId: 'AKIAI6ENA23WUQ7VWOXA',
        secretAccessKey: '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'
      }
    }
  }
})
