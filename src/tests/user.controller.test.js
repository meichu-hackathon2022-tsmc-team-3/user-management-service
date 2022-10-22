const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const {
    getUser
} = require("../controller/user.controller");

const {
    users
} = require("./_dummy");

describe('Test /user', () => {

    describe('Test get user info with uid', () => {

        users.forEach( (user) => {
            it(`should return a valid user with uid ${user.uid}`, async () => {

                const req = mockRequest({
                    params: {
                        uid: user.uid
                    }
                });
                const res = mockResponse();

                await getUser(req, res);

                sinon.assert.calledWith(res.status, 200);
                sinon.assert.calledOnce(res.json);
                expect(res.result).includes({uid: user.uid});

            });
        })

        it('should return null if no user found', async () => {

                const req = mockRequest({
                    params: {
                        uid: "FAKE_USER_UID"
                    }
                });
                const res = mockResponse();

                await getUser(req, res);

                sinon.assert.calledWith(res.status, 404);
                sinon.assert.calledOnce(res.json);
                sinon.assert.calledWith(res.json, {
                    detail: "User not found"
                });
        })

    });

    describe('Test get user info with rfid', () => {

        users.forEach( (user) => {
            it(`should return a valid user with rfid ${user.RFID_id}`, async () => {

                const req = mockRequest({
                    params: {
                        rfid: user.RFID_id
                    }
                });
                const res = mockResponse();

                await getUser(req, res);

                sinon.assert.calledWith(res.status, 200);
                sinon.assert.calledOnce(res.json);
                expect(res.result).includes({uid: user.uid});

            });
        })

        it('should return null if no user found', async () => {

                const req = mockRequest({
                    params: {
                        rfid: "FAKE_USER_RFID"
                    }
                });
                const res = mockResponse();

                await getUser(req, res,);

                sinon.assert.calledWith(res.status, 404);
                sinon.assert.calledOnce(res.json);
                sinon.assert.calledWith(res.json, {
                    detail: "User not found"
                });
        })

    });

})