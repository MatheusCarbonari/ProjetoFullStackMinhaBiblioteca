import express from 'express';
import LivroController from '../controllers/livroscontroller.js';

const router = express.Router();

router
    .get("/livros", LivroController.pegarLivros)
    .get("/livros/:id", LivroController.pegarLivrosPorId)
    .post("/adicionarlivros", LivroController.adicionarLivro)
    .put("/editar/:id", LivroController.atualizarLivro)
    .delete("/deletar/:id", LivroController.deletarLivro)

export default router;