import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandbox5a599ac2f39f4b9eb9b9a85d988efa59.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
    const emailData = {
        from: "wantbycre@gmail.com",
        to: "wantbycre@gmail.com",
        subject,
        html
    };
    return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
    const emailSubject = `Hello! ${fullName}, please verify your email`;
    const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;;

    return sendEmail(emailSubject, emailBody);
};
  