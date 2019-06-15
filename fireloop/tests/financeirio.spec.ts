var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('financeirio unit tests:', () => {
    it('Should create a financeirio instance', (done: Function) => {
        api.post('/financeirios').send({
            nome: 'test',
            valor: 12345,
            dataVencimento: 'Sat Jun 15 2019 02:28:31 GMT-0900 (Horário de Verão das Aleutas)',
            dataPagamento: 'Sat Jun 15 2019 02:28:31 GMT-0900 (Horário de Verão das Aleutas)'
        }).expect(200, done);
    });
});
