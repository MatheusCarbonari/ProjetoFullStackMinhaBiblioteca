import axios from "axios";

const ApiUrl  = axios.create({ baseURL: "http://localhost:3000/livros" })

async function pegarLivros() {
    const resposta = await ApiUrl.get('/')

    return resposta.data
}

export {
    pegarLivros
}