import { model, Schema } from 'mongoose';

// Definindo a classe Order e exportando-a
export const Bairro = model('Bairro', new Schema({
  // Campo 'table' que armazena o número da mesa como uma string obrigatória
  nome: {
    type: String,
    required: true // O campo 'name' é obrigatório
  }
}));