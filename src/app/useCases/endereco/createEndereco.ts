import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

// Função assíncrona para criar uma categoria
export async function createEndereco(req: Request, res: Response) {
	try {
		// Extrai as propriedades 'icon' e 'name' do corpo da requisição
		const { nome, numero, complemento, bairro, cidade } = req.body;

		// Cria uma nova categoria usando o método 'create' do modelo 'Category'
		const endereco = await Endereco.create({ nome, numero, complemento, bairro, cidade });

		// Retorna o status HTTP 201 (Created) com a categoria criada em formato JSON
		res.status(201).json(endereco);
	} catch (error) {
		// Em caso de erro, o log é exibido no console
		console.log(error);
		// Retorna o status HTTP 500 (Internal Server Error)
		res.sendStatus(500);
	}
}