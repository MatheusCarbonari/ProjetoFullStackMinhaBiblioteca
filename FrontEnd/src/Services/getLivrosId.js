import axios from "axios";

const ApiUrl  = axios.create({ baseURL: "http://localhost:3000/livros" })

async function pegarLivrosNoBancoPorId(id) {
    const resposta = await ApiUrl.get(`/${id}`)

    return resposta.data
}

export {
    pegarLivrosNoBancoPorId
}