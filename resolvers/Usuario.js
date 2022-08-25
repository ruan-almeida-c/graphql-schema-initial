const {perfis} = require('../data/db')

module.exports = {
  salario(usuario){
    return usuario.salario_real
  },
  perfil(usuario){
    const sels = perfis.filter( e => e.id === usuario.id_perfil)
    return sels ? sels[0] : null
   }
}