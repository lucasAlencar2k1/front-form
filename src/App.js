import Formulario from "./Components/Formulario";
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

function App() {

  return (
    <AppContainer>
      <Formulario />
    </AppContainer>
  );
}

export default App;
