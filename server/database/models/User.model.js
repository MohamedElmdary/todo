"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const fullName = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25,
        lowercase: true,
        alias: 'fn'
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25,
        lowercase: true,
        alias: 'ln'
    },
}, {
        autoIndex: false,
        _id: false
    });

const changePasswordReq = new Schema({
    hash: String,
    date: {
        type: Date,
        default: new Date().getTime() + (3600000 * 3)
    }
}, {
        autoIndex: false,
        _id: false
    });

const User = new Schema({
    fullName,
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        index: true,
        alias: 'e'
    },
    gender: {
        type: String,
        required: true,
        enum: [
            "f",
            "m"
        ],
        alias: 'g'
    },
    token: {
        type: String,
        default: null
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    changePasswordReq
}, {
        autoIndex: true,
        versionKey: false,
        skipVersioning: true,
        timestamps: true,
    });

User.methods.validatePassword = async function (password, hash) {
    return await bcrypt.compare(password, hash);
};

mongoose.model("User", User);