import AWS from 'config/aws'

export const send = async (phoneNumber, message) => {
  const sns = new AWS.SNS()

  return await sns.publish({
    Message: message,
    PhoneNumber: phoneNumber,
    Subject: 'Sudic'
  }).promise()
}
