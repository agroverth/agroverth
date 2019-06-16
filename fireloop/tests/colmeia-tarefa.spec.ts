var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('colmeiaTarefa unit tests:', () => {
    it('Should create a colmeiaTarefa instance', (done: Function) => {
        api.post('/colmeia-tarefas').send({
            previsao: 'Sat Jun 15 2019 22:00:44 GMT-0300 (Horário Padrão de Tocantins)',
            tipo: 'test',
            quantidade: 12345,
            dataConclusao: 'Sat Jun 15 2019 22:00:44 GMT-0300 (Horário Padrão de Tocantins)'
        }).expect(200, done);
    });
});
