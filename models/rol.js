// Importar el esquema mongoose
const { Schema, model } = require('mongoose');


// Definir la estructura de la colección
const RolSchema = Schema({
  nombrerol: {
    type: String,
    required: [true, 'El nombre es obligatoria']
  },
  permisos: {
    type: String,
    required: [true, 'Seleccione los permisos asociados al rol ']
  },
  funciones: {
    type: String,
    required: [true, 'Seleccione las funciones asociados al rol']
  },

fechacreacion: {
  type: Date,
  default: Date.now,
},
estado: {
    type: Boolean,
    default: true,
    required: [true, 'El estado es obigatorio']
}
});

module.exports = model('Rol', RolSchema);
