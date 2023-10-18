import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(

    {
        id:{type: String},
        titulo:{type: String, required: true},
        autor:{type: String, required: true},
        editora:{type: String, required: true},
        categoria:{type: String, required: true},
        descricao:{type: String},
        imagem:{type: String},
        lido:{type: String},
        anoLeitura:{type: Number}
    }

)

const livros = mongoose.model('Livros', livroSchema);

export default livros;