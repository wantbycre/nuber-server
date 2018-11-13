import Mailgun from "mailgun-js";

const mailgunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandbox5a599ac2f39f4b9eb9b9a85d988efa59.mailgun.org"
});
