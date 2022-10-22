const UserDB = require("../model/user.model");
const DepartmentDB = require("../model/department.model");
const departmentRelationsDB = require("../model/departmentRelation.model");

const {
    users,
    departments,
    departmentRelations
} = require("../tests/_dummy");

const initDB = () => {
    return new Promise(async (res, rej) => {
        await UserDB.deleteMany({});
        await DepartmentDB.deleteMany({});
        await departmentRelationsDB.deleteMany({});
        await UserDB.insertMany(users);
        await DepartmentDB.insertMany(departments);
        await departmentRelationsDB.insertMany(departmentRelations);
        console.log(`MongoDB initialized with ENV: ${process.env.ENV}`);
        res();
    });
}

module.exports = initDB;