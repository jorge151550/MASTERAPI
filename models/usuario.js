// Importar el esquema mongoose
const { Schema, model } = require('mongoose');


// Definir la estructura de la colección
const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatoria']
  },
  apellidos: {
    type: String,
    required: [true, 'El apellido es obligatoria']
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatoria']
  },
  telefono: {
    type: Number,
    required: [true, 'El telefono es obligatoria']
  },
  rol: {
    type: String,
    enum: ['Admin', 'Usuario'],
    required: [true, 'El rol es obligatorio']
  },
  fechacreacion: {
    type: Date,
   default: Date.now,
  },
  estado: {
    type: Boolean,
    default: true,
    required: [true, 'El estado es obligatorio']
},
contrasena: {
  type: Number,
  required: [true, 'La Contraseña es obligatoria ']
}
});

module.exports = model('Usuario', UsuarioSchema);
