function pesquisarPessoaPorCPF(cpf) {
  const pessoas =[
    {
      nome: 'João',
      cpf: '12345678901',
      frutasFavoritas: ['banana', 'uva'],
    },
    {
      nome: 'Maria',
      cpf: '12345678902',
      frutasFavoritas: ['laranja', 'manga'],
    },
    {
      nome: 'Ana',
      cpf: '12345678903',
      frutasFavoritas: ['maçã', 'uva'],
    }
  ]

  for (let indice = 0; indice < pessoas.length; indice++) {
    if (cpf == pessoas[indice].cpf) {
      return pessoas[indice]
    }
  }

  return 'CPF não encontrado'
}

module.exports = {
  pesquisarPessoaPorCPF
}