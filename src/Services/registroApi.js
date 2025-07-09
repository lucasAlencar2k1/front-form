import axios from "axios"

const registro_api = axios.create({ baseURL: "https://back-form.vercel.app" })

async function get_busca_usuarios() {
    const lista = await registro_api.get("/usuarios")
    return lista.data
}

async function post_criar_usuario(dados_usuario) {
    await registro_api.post(`/usuarios`, dados_usuario)
}

export {
    get_busca_usuarios,
    post_criar_usuario
}