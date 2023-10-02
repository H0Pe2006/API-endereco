import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listBairro } from './app/useCases/bairro/listBairro';
import { createBairro } from './app/useCases/bairro/createBairro';
import { listCidade } from './app/useCases/cidade/listCidade';
import { createCidade } from './app/useCases/cidade/createCidade';
import { listEndereco } from './app/useCases/endereco/listEndereco';
import { createEndereco} from './app/useCases/endereco/createEndereco';

// Cria uma instância do router Express
export const router = Router();

// Configura o multer para processar uploads de arquivos
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

// Rotas para listagem e criação de categorias
router.get('/cidade', listCidade);
router.post('/cidade', createCidade);

// Rotas para listagem e criação de categorias
router.get('/bairro', listBairro);
router.post('/bairro', createBairro);

// Rotas para listagem e criação de categorias
router.get('/endereco', listEndereco);
router.post('/endereco', createEndereco);