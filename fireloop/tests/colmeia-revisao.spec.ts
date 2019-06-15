var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('colmeiaRevisao unit tests:', () => {
    it('Should create a colmeiaRevisao instance', (done: Function) => {
        api.post('/colmeia-revisaos').send({
            data: 'Sat Jun 15 2019 02:03:39 GMT-0900 (Horário de Verão das Aleutas)',
            temperaturaInterna: 12345,
            temperaturaExterna: 12345,
            humidadeInterna: 12345,
            humidadeExterna: 12345,
            predadoresDescricao: 'test',
            ocorrencias: 'test',
            quantidadeNinho: 12345,
            quantidadeMelgueira: 12345
        }).expect(200, done);
    });
});
