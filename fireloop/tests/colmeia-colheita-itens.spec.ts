var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('colmeiaColheitaItens unit tests:', () => {
    it('Should create a colmeiaColheitaItens instance', (done: Function) => {
        api.post('/colmeia-colheita-itens').send({}).expect(200, done);
    });
});
