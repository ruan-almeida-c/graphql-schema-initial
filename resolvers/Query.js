const {usuarios, perfis} = require('../data/db')

module.exports = {
  ola(){
    return "Olá Mundo!"
  },
  horaAtual(){
    return new Date()
  },
  usuarioLogado(){
    return {
      id: 1,
      nome: 'Teste',
      email: 'Teste@email.com',
      idade: 23,
      salario_real: 123.25,
      vip: true
    }
  },
  produtoComprado(){
    return{
      nome: "Tenis",
      preco: 199.20,
      desconto: 0.50
    }
  },
  numeroMegaSena(){
    const crescente = (a, b) => a - b
    return Array(6).fill(0)
    .map(n => parseInt(Math.random() * 60 + 1))
    .sort(crescente)
  },
  usuarios(){
    return usuarios
  },
  usuario(_, {id}){
    const filted = usuarios.filter( e => e.id === id )
    return filted ? filted[0] : null
  },
  perfis(){
    return perfis
  },
  perfil(_, {id}){
    const filted = perfis.filter( e => e.id === id )
    return filted ? filted[0] : null
  }
}