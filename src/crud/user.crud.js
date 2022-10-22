const userDB = require("../model/user.model");

exports.getUser = async () => {
    return await userDB.find({}).exec();
}

exports.getUserByUid = async (uid) => {
    return await userDB.findOne({ uid: uid }).exec();
}

exports.getUserByRFID = async (rfid) => {
    return await userDB.findOne({ RFID_id: rfid }).exec();
}