import styled from "styled-components"

const BotaoStyled = styled.button`
    color: #FFFFFF;
    background-color: #03C988;
    border: none;
    border-radius: 12px;
    padding: 12px;
    cursor: pointer;
    &:hover {
        background-color:rgba(3, 201, 135, 0.65);
    }
`

function Botao({on_click}) {
    return (
        <div>
            <BotaoStyled onClick = {on_click}>CONFIRMAR</BotaoStyled>
        </div>
    )
}

export default Botao;