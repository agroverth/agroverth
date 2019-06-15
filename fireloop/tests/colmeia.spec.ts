var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('colmeia unit tests:', () => {
    it('Should create a colmeia instance', (done: Function) => {
        api.post('/colmeia').send({
            numero: 'test',
            nome: 'test',
            quantidadeNinho: 12345,
            quantidadeMelgueira: 12345
        }).expect(200, done);
    });
});
