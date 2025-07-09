import { post_criar_usuario } from "../../Services/registroApi"
import styled from "styled-components"
import CampoFormulario from "../CampoFormulario"
import Titulo from "../Titulo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Botao from "../Botao"

const FormularioContainer = styled.form`
    display: flex;
    flex-direction: column;
    background-color:rgba(255, 255, 255, 0.13);
    padding: 32px;
    gap: 32px;
    border-radius: 8px;
`

function Formulario() {

    const [email, setEmail] = useState("")
    console.log(email)
    const [senha, setSenha] = useState("")
    console.log(senha)

    async function criar_usuario(event) {
        event.preventDefault()
        const dados_usuario = {
            email: email,
            senha: senha
        }
        navigate("/sucesso")
        await post_criar_usuario(dados_usuario)
    }

    const navigate = useNavigate()

    return (
        <FormularioContainer onSubmit = {criar_usuario}>
            <Titulo>NEWSLETTER SENAC</Titulo>
            <CampoFormulario 
            on_change={(e) => setEmail(e.target.value)} 
            value={email} titulo_campo="Email" 
            placeholder_texto="Digite seu email" 
            autoComplete = "email"
            />
            <CampoFormulario 
            on_change={(e) => setSenha(e.target.value)} 
            value={senha} titulo_campo="Senha" 
            placeholder_texto="Digite sua senha" 
            tipo_do_campo="password" 
            autoComplete = "current-password"
            />
            <Botao/>
        </FormularioContainer>
    )
}

export default Formulario