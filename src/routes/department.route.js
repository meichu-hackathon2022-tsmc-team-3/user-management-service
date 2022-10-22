const departmentController = require("../controller/department.controller");

const express = require("express");
const router = express.Router();

router.get('/', departmentController.getDepartments);
router.get('/did/:did', departmentController.getDepartment);

module.exports = router;
