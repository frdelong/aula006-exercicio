const { pesquisarPessoaPorCPF } = require('../src/pesquisar.js')
const { strictEqual } = require('node:assert')

describe('Pesquisar', () => {
  it('Ao informar o CPF da Ana, teremos o seu nome, CPF e frutas favoritas', () => {
    // Arrange
    const cpfPesquisado = '12345678903'
    const nomeEsperado = 'Ana'
    const cpfEsperado = '12345678903'
    const primeiraFrutaEsperada = 'maçã'
    const segundaFrutaEsperada = 'uva'

    // Act
    const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

    // Assert
    strictEqual(pessoa.nome, nomeEsperado)
    strictEqual(pessoa.cpf, cpfEsperado)
    strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
    strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
  })

  it('Ao informar um CPF que não existe, teremos a mensagem "CPF não encontrado"',() => {
    // Arrange
    const cpfPesquisado = '00000000000'
    const mensagemEsperada = 'CPF não encontrado'

    // Act
    const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

    // Assert
    strictEqual(pessoa, mensagemEsperada)
  })
})