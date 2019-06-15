var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('colmeriaAnaliseFavo unit tests:', () => {
    it('Should create a colmeriaAnaliseFavo instance', (done: Function) => {
        api.post('/colmeria-analise-favos').send({
            quantidadeVazios: 12345
        }).expect(200, done);
    });
});
