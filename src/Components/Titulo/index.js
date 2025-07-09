import styled from "styled-components"

const TituloStyled = styled.h1`
    font-size: 34px;
    text-align: center;
`

function Titulo() {
  return (
    <div>
        <TituloStyled>TESTE API-MONGODB</TituloStyled>
    </div>
  )
}

export default Titulo;