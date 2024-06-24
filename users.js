import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
});

export class Iuser {
    constructor(user, mail) {
        this._user = user;
        this._mail = mail;
    }

    get user() {
        return this._user;
    }

    set user(newUser) {
        this._user = newUser;
    }

    get mail() {
        return this._mail;
    }

    set mail(newMail) {
        this._mail = newMail;
    }
}
export const users = mongoose.model('users', usersSchema);
