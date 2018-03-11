import AWS from 'config/aws'

/*
// Create sendEmail params template
var params = {
  Destination: { // required
    CcAddresses: [
      'EMAIL_ADDRESS',
      // more items
    ],
    ToAddresses: [
      'EMAIL_ADDRESS',
      // more items
    ]
  },
  Message: { // required
    Body: { // required
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },_
  Source: 'SENDER_EMAIL_ADDRESS', // required
  ReplyToAddresses: [
      'EMAIL_ADDRESS',
    // more items
  ],
}
*/

export const send = async (params) => {
  const ses = new AWS.SES()

  return await ses.sendEmail(params).promise()
}
