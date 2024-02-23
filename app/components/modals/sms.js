const accountSid = 'api_key';
const authToken = 'api_key';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'hello heres your mms',
        from: '+api_key',
        to: '+api_key'
    })
    .then(message => console.log(message.sid))
    .done();