import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

// Função assíncrona para listar todos os produtos
export async function listBairro(req: Request, res: Response) {
	try {
		const bairro = await Bairro.find();
		res.json(bairro);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
