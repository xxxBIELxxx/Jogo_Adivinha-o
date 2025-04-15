import styled from 'styled-components'
import { useState, useEffect } from 'react';


const DisplayInfo = styled.div`
    position: relative;
    display: block;
    height: auto;
    width: 100%;
    border: 1px solid black;
`


function TelaInfoJogadores(props){
    const [pontuacaoJgdr1, setPontuacaoJgdr1] = useState(0);
    const [pontuacaoJgdr2, setPontuacaoJgdr2] = useState(0);
    const [inicio, setInicio] = useState(true);

    useEffect(() => {
        if ((props.vez === 'vez_jogador1') && inicio == false) {
            setPontuacaoJgdr1(prev => prev + 1);
        } else if ((props.vez === 'vez_jogador2') && inicio == false) {
            setPontuacaoJgdr2(prev => prev + 1);
        }
        setInicio(false);
    }, [props.vez]);
    return(
        <DisplayInfo>
            <h1>Informações dos Jogadores</h1>
            <p>Jogador 1</p>
            <p>Pontuação: {pontuacaoJgdr2}</p>
            <p>Jogador 2</p>
            <p>Pontuação: {pontuacaoJgdr1}</p>
        </DisplayInfo>
    )
}

export default TelaInfoJogadores;