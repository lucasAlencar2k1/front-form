import styled from "styled-components"

const TituloCampo = styled.label`
    font-size: 22px;
    display: block;
    padding: 8px;
`

const Campo = styled.input`
    width: 400px;
    padding: 8px;
    font-size: 18px;
    border-radius: 12px;
    transition: 650ms;
    outline: none;
    border: 2px solid;
    &:focus {
        border: 2px solid #03C988;
    }
`

function CampoFormulario({ titulo_campo, placeholder_texto, tipo_do_campo, value, on_change, autoComplete }) {
    return (
        <div>
            <TituloCampo>{titulo_campo}</TituloCampo>
            <Campo placeholder={placeholder_texto} value = {value} onChange = {on_change} type = {tipo_do_campo} required autoComplete = {autoComplete}/>
        </div>
    )
}

export default CampoFormulario;