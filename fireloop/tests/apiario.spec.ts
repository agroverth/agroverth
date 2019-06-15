var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('apiario unit tests:', () => {
    it('Should create a apiario instance', (done: Function) => {
        api.post('/apiarios').send({
            nome: 'test',
            localizacao: 'test',
            especie: 'test',
            dataCriacao: 'Sat Jun 15 2019 01:41:56 GMT-0900 (Horário de Verão das Aleutas)'
        }).expect(200, done);
    });
});
