const userController = require("../controller/user.controller");

const express = require("express");
const router = express.Router();

router.get('/', userController.getAllUser);
router.get('/uid/:uid', userController.getUser);
router.get('/rfid/:rfid', userController.getUser);

module.exports = router;
