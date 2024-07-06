const saudacao = require('./saudacao')

describe('Testes para saudação', () => {
    test('Devera retornar Olá, Maria', () => {
        const olaMaria = saudacao.dizOla('Maria')
        expect(olaMaria).toBe('Olá, Maria')

        // Verificando se existe algum tipo de texto
        expect(typeof olaMaria).toBe('string')
        expect(olaMaria).not.toBe('')
    })
})
