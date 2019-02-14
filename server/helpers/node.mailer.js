"use strict";
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, html) => {
    const account = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    const mailOptions = {
        from: '"Fred Foo 👻" <foo@blurdybloop.com>',
        to,
        subject,
        html
    };

    await transporter.sendMail(mailOptions);
};

module.exports = {
    sendEmail
};
