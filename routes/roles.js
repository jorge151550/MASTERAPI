const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getRol, postRol, putRol, deleteRol} = require('../controllers/rol')

route.get('/', getRol)

route.post('/', postRol)

route.put('/', putRol)

route.delete('/', deleteRol)


module.exports = route   
