import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

// Função assíncrona para listar todos os produtos
export async function listCidade(req: Request, res: Response) {
	try {
		// Consulta todos os produtos no banco de dados
		// - Usa o método 'find()' para buscar todos os documentos na coleção 'Product'
		const cidade = await Cidade.find();

		// Envia a lista de produtos como resposta em formato JSON
		res.json(cidade);
	} catch (error) {
		// Em caso de erro, registra o erro no console
		console.log(error);

		// Envia uma resposta de erro com o código de status 500 (Internal Server Error)
		res.sendStatus(500);
	}
}
