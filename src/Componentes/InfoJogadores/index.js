import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Jogadores from '../Jogadores';   

const DisplayInfo = styled.div`
    position: relative;
    display: block;
    background-color: #1E1E3F;
    border-radius: 10px;
    height: auto;
    width: 70%;
    margin: 5px;
    font-weight: 20px;
`

const DivJogadores = styled.div`


`


const Tituloh1 = styled.h1`
    font-size: 20px;
    opacity: 100%;
    color: white;
    margin: 10px;
`

function TelaInfoJogadores({ vez, pontuacaoJgdr1, pontuacaoJgdr2}) {
    console.log(vez)
    return(
        <DisplayInfo>
            <Tituloh1>Informações dos Jogadores</Tituloh1>
            <Jogadores 
            vez={vez}
            pontuacaoJgdr1={pontuacaoJgdr1}
            pontuacaoJgdr2={pontuacaoJgdr2}
            />
        </DisplayInfo>
    )
}

export default TelaInfoJogadores;