var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('pessoa unit tests:', () => {
    it('Should create a pessoa instance', (done: Function) => {
        api.post('/pessoas').send({
            nome: 'test',
            telefone: 'test',
            email: 'test',
            cargo: 'test'
        }).expect(200, done);
    });
});
