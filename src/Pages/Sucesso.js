import styled from "styled-components"
import memeImg from "../assets/image/meme-img.jpeg"

const MensagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Mensagem = styled.div`
  background-color:rgba(255, 255, 255, 0.13);
  padding: 80px;
  text-align: center;
  max-width: 500px;
`

const ImagemMensagem = styled.img`
  width: 200px;
`

const TextoMensagem = styled.p`
  font-size: 22px;
  padding: 20px;
`

function Sucesso() {
  return (
    <MensagemContainer>
      <Mensagem>
        <ImagemMensagem src={memeImg} />
        <TextoMensagem>GRATIDÃO!</TextoMensagem>
      </Mensagem>
    </MensagemContainer>
  )
}

export default Sucesso;