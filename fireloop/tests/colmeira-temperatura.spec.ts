var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('colmeiraTemperatura unit tests:', () => {
    it('Should create a colmeiraTemperatura instance', (done: Function) => {
        api.post('/colmeira-temperaturas').send({
            temperatura: 12345,
            data: 'Sat Jun 15 2019 22:20:10 GMT-0300 (Horário Padrão de Tocantins)'
        }).expect(200, done);
    });
});
