import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

// Função assíncrona para listar categorias
export async function listEndereco(req: Request, res: Response) {
	try {
		// Obtém todas as categorias usando o método 'find' do modelo 'Category'
		const endereco = await Endereco.find();

		// Retorna as categorias em formato JSON
		res.json(endereco);
	} catch (error) {
		// Em caso de erro, o log é exibido no console
		console.log(error);
		// Retorna o status HTTP 500 (Internal Server Error)
		res.sendStatus(500);
	}
}