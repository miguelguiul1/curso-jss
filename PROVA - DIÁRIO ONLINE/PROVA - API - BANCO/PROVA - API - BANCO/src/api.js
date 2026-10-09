import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { addRouter } from './router.js';

const api = express();
api.use(cors());
api.use(express.json());

addRouter(api);

const PORT = process.env.PORT
api.listen(PORT, () => console.log(`API subiu na porta ${PORT}`));