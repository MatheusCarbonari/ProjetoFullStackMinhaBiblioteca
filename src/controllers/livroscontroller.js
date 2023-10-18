import livros from "../models/Livros.js";

class LivroController {

    static pegarLivros = async(req,res) => {
        try{
            const buscarLivrosDB = await livros.find()
            if(buscarLivrosDB.length === 0){
                res.send({message: `No momento não ha livros cadastrados. :(`})
            }else{
                res.status(200).json(buscarLivrosDB)
            }
        }catch(error){
            res.status(500).json(error)
        }
    }

    static pegarLivrosPorId = async(req,res) => {
        const id = req.params.id

        try{
            const livroPorId = await livros.findById(id)
            if(livroPorId === null){
                res.status(500).send({message: `Erro ao buscar o livro. ${error.message}`});
            }else{
                res.status(200).json(livroPorId)
            }
        }catch(error){
            res.status(500).send({message: `Erro ao buscar o livro. ${error.message}`});
        }
    }

    static adicionarLivro = async(req, res) => {
        try{
            let novoLivro = new livros(req.body);
            await novoLivro.save();
            res.status(201).json(novoLivro);
        }catch(error){
            res.status(500).send({message: `Erro ao cadastrar o livro. ${error.message}`});
        }
    }

    static atualizarLivro = async(req, res) => {
        const id = req.params.id
        
        try{
            await livros.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: `Livro atualizado com sucesso`});
        }catch(error){
            res.status(500).send({message: `Erro ao atualizar o livro. ${error.message}`});
        }
    }

    static deletarLivro = async(req,res) => {
        const id = req.params.id
        
        try{
            await livros.findByIdAndDelete(id)
            res.status(201).send({message: `Livro foi deletado com sucesso`})
        }catch(error){
            res.status(500).send({message: `Erro ao tentar deletar o livro. ${error.message}`})
        }
    }

}

export default LivroController;