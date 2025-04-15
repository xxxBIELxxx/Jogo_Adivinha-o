import styled from 'styled-components';
import Font from '../../Fonts/Silkscreen/Silkscreen-Regular.ttf'


const TituloDiv = styled.div`
    display: block;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0px;
`

const TituloEstilo = styled.h1`    
    font-family: ${Font.toString()};
    font-size: 100px;
`

function Titulo(){
    return(
        <TituloDiv>
            <TituloEstilo>QUIZ</TituloEstilo>
        </TituloDiv>
    )
}

export default Titulo;
