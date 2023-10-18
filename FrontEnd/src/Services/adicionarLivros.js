import axios from "axios";

const ApiUrl = axios.create({ baseURL: "http://localhost:3000/adicionarlivros" })

async function AdicionarLivrosAoBanco(livros) {

    const headers = {
        'headers':{
            'Content-type':'application/json'
        }
    };

    await ApiUrl.post('/', livros, headers).then((response) => {
        console.log("Cadastrado com sucesso")
    }).catch((error) => {
        console.log(error)
    })

}

export {
    AdicionarLivrosAoBanco
}