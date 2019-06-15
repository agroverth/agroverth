var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('colmeiaColheita unit tests:', () => {
    it('Should create a colmeiaColheita instance', (done: Function) => {
        api.post('/colmeia-colheita').send({
            data: 'Sat Jun 15 2019 02:12:12 GMT-0900 (Horário de Verão das Aleutas)',
            quantidadeNinhos: 12345,
            quantidadeMelgueiras: 12345,
            quantidadePropolis: 12345,
            quantidadeCera: 12345,
            quantidadePolen: 12345,
            quantidadeVazios: 12345,
            quantidadeOvos: 12345,
            quantidadeLarvas: 12345,
            quantidadePupasOperarias: 12345,
            quantidadePupasZangoes: 12345
        }).expect(200, done);
    });
});
