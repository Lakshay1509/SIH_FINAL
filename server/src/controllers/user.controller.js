import { asyncHandler } from '../utils/asyncHandler.js';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid  = process.env.accountSid;
const authToken = process.env.authToken;

const client = twilio(accountSid, authToken);

const makePayment = asyncHandler(async (req, res) => {
    
    const { amount, bookingId ,qrcode} = req.body;
    try {
        const message = await client.messages.create({
            body: `Your booking is confirmed. Thank you for booking with us! Your booking Id : ${bookingId} and amount paid is ${amount}.You can access the QR code below to access your booking details: ${qrcode}` ,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+918882347814' 
        }); 
        console.log(message.sid);
        res.status(200).json({
            success: true,
            message: 'Payment successful'
        });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(400).json({
            success: false,
            message: 'Payment failed'
        });
    }

    
});

export { makePayment };
