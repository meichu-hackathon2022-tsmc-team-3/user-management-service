const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    uid: {
        // User Id 
        type: String,
        required: true,
    },
    name: {
        // User name
        type: String,
        required: true,
    },
    email: {
        // User email
        type: String,
        required: true,
    },
    RFID_id: {
        // User RFID id
        type: String,
        required: true
    },
    // 0 : Deleted
    // 1 : Proved by portal
    status: Number,
});

const UserDB = mongoose.model("users", userSchema);

module.exports = UserDB;