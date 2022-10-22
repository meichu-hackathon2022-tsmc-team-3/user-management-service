const mongoose = require("mongoose");

const departmentRelationSchema = new mongoose.Schema({
    did: {
        // Department id
        type: String,
        required: true,
    },
    uid: {
        // user id
        type: String,
        required: true,
    },
    role: {
        // role type
        type: String,
        required: true
    }
});

const DepartmentRelationDB = mongoose.model("department-relations", departmentRelationSchema);

module.exports = DepartmentRelationDB;