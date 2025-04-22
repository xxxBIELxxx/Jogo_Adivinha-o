import styled from 'styled-components';
import { questions } from '../Perguntas';

const DivPergunta = styled.div`
    position: relative;
    display: inline-block;
    height: 25%;
    width: 95%;
    /* top: 72px; */
    margin: 5px;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    border: 5px solid rgb(82, 54, 141);
    /* border: drop-shadow(5px 5px 5px rgb(82, 54, 141)); */
`

function PerguntaAtual(props) {
    return(
        <DivPergunta>
            <h2>{questions[props.numPergunta].question}</h2>
        </DivPergunta> 
    )
}

export default PerguntaAtual;