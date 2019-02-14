"use strict";
const mongoose = require("mongoose");
const User = mongoose.model("User");
const { hashPasswords } = require("../../helpers/bcrypt.helpers");
const { myError } = require("../../helpers/error.mine");
const uuid = require("uuid/v1");

async function register(req, res, next) {
    try {
        const password = await hashPasswords(req.body.password);
        const user = await new User({
            fullName: {
                firstName: req.body.firstName.trim(),
                lastName: req.body.lastName.trim()
            },
            email: req.body.email,
            gender: req.body.gender,
            password
        }).save();
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};

async function findByEmail(email) {
    return await User.findOne({ email });
}

async function updateByEmail(email, payload) {
    return await User.updateOne({ email }, payload);
}

async function findById(id) {
    return await User.findById(id);
}

async function login(req, res, next) {
    try {
        const user = await findByEmail(req.body.email);
        if (user && await user.validatePassword(req.body.password, user.password)) {
            req.user = user;
            return next();
        }

        myError(["Invalid login credential"]);
    } catch (err) {
        next(err);
    }
}

async function changePass(req, res, next) {
    try {
        const user = await findByEmail(req.body.email);

        if (!user)
            myError(["User was not found yet"]);

        if (user.changePasswordReq && new Date().getTime() < new Date(user.changePasswordReq.date).getTime())
            myError(["Please check you email the code still available", "Check spam email or try again later"]);

        const hash = uuid();
        await updateByEmail(req.body.email, {
            changePasswordReq: {
                hash
            }
        });
        req.payload = {
            user,
            hash
        };
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = {
    findByEmail,
    updateByEmail,
    findById,
    register,
    login,
    changePass
}