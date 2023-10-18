import axios from "axios";

const ApiUrl  = axios.create({ baseURL: "http://localhost:3000/deletar" })

async function deleteLivro(id) {
    await ApiUrl.delete(`/${id}`)
}

export {
    deleteLivro
}