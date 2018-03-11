import AWS from 'aws-sdk'
import bluebird from 'bluebird'
import config from 'config/config'

AWS.config.setPromisesDependency(bluebird)
AWS.config.update({
  region: config.aws.region,
  accessKeyId: config.aws.credentials.accessKeyId,
  secretAccessKey: config.aws.credentials.secretAccessKey
})
AWS.config.apiVersions({
  sns: '2010-03-31',
  ses: '2010-12-01'
})

export default AWS
