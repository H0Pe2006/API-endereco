import { model, Schema } from 'mongoose';

// Define o modelo 'Category' usando o Mongoose
export const Endereco = model('Endereco', new Schema({
  nome: {
    type: String,
    required: true // O campo 'name' é obrigatório
  },
  numero: {
    type: String,
    required: true, // O campo 'icon' também é obrigatório
  },
  complemento: {
    type: String,
    required: true,
  },
  bairro: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  cidade: {
    type: Schema.Types.ObjectId,
    required: true,
  }
}));