import assert from 'node:assert';
import { realizarLogin } from '../src/gerenciarUsuarios.js';

describe('Testes para validar login de usuarios', function() {
    
    it('Deve realizar login com sucesso', function() {
        const emailValido = 'jessicas@pgats.com';
        const senhaValida = 123456;

        const mensagemRetornada = realizarLogin(emailValido, senhaValida);

        assert.equal(mensagemRetornada, 'Login realizado com sucesso!');
    });

    it('Deve lançar erro para credenciais expiradas', function() {
        const emailExpirado = 'pedro@pgats.com';
        const senhaExpirada = 6789;

        assert.throws(() => realizarLogin(emailExpirado, senhaExpirada), {
            name: 'Error',
            message: 'Credencias expiradas!'
        });
    });

    it('Deve lançar erro para usuário não encontrado', function() {
        const emailInvalido = 'notfound@pgats.com';
        const senhaQualquer = 123456;

        const mensagemRetornada = realizarLogin(emailInvalido, senhaQualquer);

        assert.equal(mensagemRetornada, 'Email nao encontrado!');
    });

    it('Deve lançar erro para senha incorreta', function() {
        const emailValido = 'juliana@pgats.com';
        const senhaIncorreta = 999999;

        assert.throws(() => realizarLogin(emailValido, senhaIncorreta), {
            name: 'Error',
            message: 'Senha incorreta!'
        });
    });
});