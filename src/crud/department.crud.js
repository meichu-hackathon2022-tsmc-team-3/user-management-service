const DepartmentDB = require("../model/department.model");

exports.getDepartments = async(skip, limit) => {
    return await DepartmentDB.find().sort("did").skip(skip).limit(limit).exec();
}

exports.getDepartmentByDid = async (did) => {
    return await DepartmentDB.findOne({did: did}).exec();
}