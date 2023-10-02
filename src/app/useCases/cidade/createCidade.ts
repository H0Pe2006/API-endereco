import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

// Função assíncrona para criar um novo produto
export async function createCidade(req: Request, res: Response) {
	try {
		// Extrai informações do produto do corpo da solicitação, como 'name', 'description', 'price', 'category' e 'ingredients'
		const { nome, estado } = req.body;

		// Cria um novo produto no banco de dados usando o modelo 'Product'
		const cidade = await Cidade.create({ 
			nome,
            estado
		});

		// Envia uma resposta de sucesso com o código de status 201 (Created) e o novo produto como JSON
		res.status(201).json(cidade);
	} catch (error) {
		// Em caso de erro, registra o erro no console
		console.log(error);

		// Envia uma resposta de erro com o código de status 500 (Internal Server Error)
		res.sendStatus(500);
	}
}
