import { model, Schema } from 'mongoose';

// Definindo a classe Product e exportando-a
export const Cidade = model('Cidade', new Schema({
  // Campo 'name' que armazena o nome do produto como uma string obrigatória
  nome: {
    type: String,
    required: true // O campo 'name' é obrigatório
  },
  estado: {
    type: String,
    required: true
  }
}));