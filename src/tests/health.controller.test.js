const chai = require('chai');
const expect = chai.expect;

const {
    healthCheckSync,
    healthCheckAsync
} = require('../controller/health.controller');

describe('Test health functional', () => {

    describe('sync', () => {
        it('health should be okay', () => {
            const actualResult = healthCheckSync();
            expect(actualResult).to.equal('OK');
        });
    });

    describe('async', () => {
        it('health should be okay', async () => {
            const actualResult = await healthCheckAsync();
            expect(actualResult).to.equal('OK');
        })
    })

});
