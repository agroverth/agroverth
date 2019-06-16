var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('abelhaEspecie unit tests:', () => {
    it('Should create a abelhaEspecie instance', (done: Function) => {
        api.post('/abelha-especies').send({
            nome: 'test',
            grauAgressividade: 12345,
            origem: 'test'
        }).expect(200, done);
    });
});
