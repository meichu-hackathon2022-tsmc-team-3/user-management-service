const mongoose = require('mongoose');
const sinon = require('sinon');

const connectDB = require("../db/connection");
const initDB = require("../db/init");

global.mockRequest = (data) => {
    return data
}
global.mockResponse = () => {
    const res = {};
    res.result = sinon.stub().returns(res);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    return res;
}
global.mockNext = () => {
    const next = sinon.stub();
    return next;
}

before( async () => {
    await connectDB();
    await initDB();
});

after( () => {
    mongoose.disconnect();
});