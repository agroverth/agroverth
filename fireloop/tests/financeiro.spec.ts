var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('financeiro unit tests:', () => {
    it('Should create a financeiro instance', (done: Function) => {
        api.post('/financeiros').send({}).expect(200, done);
    });
});
