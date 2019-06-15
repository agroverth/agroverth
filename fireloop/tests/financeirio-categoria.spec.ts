var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('financeirioCategoria unit tests:', () => {
    it('Should create a financeirioCategoria instance', (done: Function) => {
        api.post('/financeirio-categoria').send({
            nome: 'test'
        }).expect(200, done);
    });
});
