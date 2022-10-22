const DepartmentRelationsDB = require("../model/departmentRelation.model");

exports.getRelationByDid = async(did) => {
    return await DepartmentRelationsDB.find({did: did}).exec();
}

exports.getRelationByUid = async(uid) => {
    return await DepartmentRelationsDB.find({uid: uid}).exec();
}