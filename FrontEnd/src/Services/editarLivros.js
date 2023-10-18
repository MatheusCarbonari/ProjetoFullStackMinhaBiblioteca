import axios from "axios";

const ApiUrl = axios.create({ baseURL: "http://localhost:3000/editar" })

async function editarLivrosNoBancoDeDados(livro, id) {

    const headers = {
        'headers':{
            'Content-type':'application/json'
        }
    };

    await ApiUrl.put(`/${id}`, livro, headers).then((response) => {
        console.log(response.data.message)
    })
    .catch((error) => {
        console.log(error)
    })

}

export {
    editarLivrosNoBancoDeDados,
}