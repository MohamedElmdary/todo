"use strict";
const nodemailer = require('nodemailer');
const { account } = require("../configs/email.config");

const sendEmail = async (to, subject, html) => {

    const transporter = nodemailer.createTransport({
        /* host: 'smtp.ethereal.email',
        port: 587,
        secure: false, */
        service: 'gmail',
        auth: account
    });

    const mailOptions = {
        from: account.user,
        to,
        subject,
        html
    };

    await transporter.sendMail(mailOptions);
};

module.exports = {
    sendEmail
};
