require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

if (!accountSid || !authToken) {
  throw new Error('TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN must be set');
}

const twilioClient = new twilio(accountSid, authToken);
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

module.exports = twilioClient ;
