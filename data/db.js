const usuarios = [
  {
    id: 1,
    nome: "Teste1",
    email: "teste1@gmail.com",
    id_perfil: 1,
    status: "ATIVO"
  },
  {
    id: 2,
    nome: "Teste2",
    email: "teste2@gmail.com",
    id_perfil: 2,
    status: "INATIVO"

  },
  {
    id: 3,
    nome: "Teste3",
    email: "teste3@gmail.com",
    id_perfil: 1,
    status: "BLOQUEADO"
  }
]

const perfis = [
  {
   id: 1,
   nome: "Comum" 
  },
  {
    id: 2,
    nome: 'Administrador'
  }
]

module.exports = {usuarios, perfis}