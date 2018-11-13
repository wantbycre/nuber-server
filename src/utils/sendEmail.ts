import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandboxe137bc60a7774f59a29dd029b0d850b9.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
    const emailData = {
        from: "w-cre@daum.net",
        to: "w-cre@daum.net",
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
  