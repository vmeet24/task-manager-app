const sgMail = require('@sendgrid/mail')
const apiKey = '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'

sgMail.setApiKey(apiKey)
const msg = {
  to: 'meetvora1998@gmail.com',
  from: 'vorameet24@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}
sgMail.send(msg)
