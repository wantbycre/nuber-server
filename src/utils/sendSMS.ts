import Twillo from "twilio";

const twilioClient = Twillo(
    process.env.TWILIO_SID,
    process.env.TWILIO_TOKEN
);

const sendSMS = (to: string, body: string) => {
    return twilioClient.messages.create({
        body,
        to,
        from: process.env.TWILIO_PHONE
    });
};

export const sendVerificationSMS = (to: string, key: string) => 
    sendSMS(to, `Your verification key is ${key}`);