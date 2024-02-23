// pages/api/sendSms.ts

import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default async function handler(req: NextApiRequest, _res: NextApiResponse) {
  const location = "Mumbai";
  const note = "Take care of animals";
  if (req.method === 'POST') {
    const { body, to } = req.body;

    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    try {
      await client.messages.create({
        body: `Urgent help needed => Location: ${location}, Note: ${note}`,
        from: 'your_twilio_phone_number',
        to: 'recipient_phone_number'
      });
      alert('SMS sent successfully!');
    } catch (error) {
      console.error('Error sending SMS:', error);
      alert('Failed to send SMS. Please try again later.');
    }
  };
}