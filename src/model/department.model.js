const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    did: {
        // Department ID
        type: String,
        required: true,
    },
    name: {
        // Department name
        type: String,
        required: true,
    },
});

const DepartmentDB = mongoose.model("departments", departmentSchema);

module.exports = DepartmentDB;