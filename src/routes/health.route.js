const express = require("express");
const healthCheckController = require('../controller/health.controller');

const router = express.Router();

router.get('/sync', (req, res) => {
    const result = healthCheckController.healthCheckSync();
    res.status(200).json({
        detail: result
    });
});

router.get('/async', async (req, res) => {
    const result = await healthCheckController.healthCheckAsync();
    res.status(200).json({
        detail: result
    })
})

module.exports = router;
