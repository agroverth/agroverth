var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('apiarioLocalizacao unit tests:', () => {
    it('Should create a apiarioLocalizacao instance', (done: Function) => {
        api.post('/apiario-localizacaos').send({
            nome: 'test',
            mesInicioProducao: 12345,
            mesFimProducao: 12345,
            tipoVegetacao: 'test'
        }).expect(200, done);
    });
});
