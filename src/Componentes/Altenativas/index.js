import styled from 'styled-components';
import { questions } from '../Perguntas';
import { useState, useEffect } from 'react';
import { estadosJogador } from '../EstadoJogador';

const Opcoes = styled.div`
    position: relative;
    display: inline-block;
    height: 60%;
    width: 95%;
    align-items: center;
    justify-content: center;
    /* border: 1px solid rgb(82, 54, 141); */
`

const OpcoesDiv = styled.div`
    position: relative;
    display: inline-block;
    height: 20%;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 2px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    border: 3px solid rgb(82, 54, 141);
    border: 3px solid
    ${({ isCorreta, isSelecionada }) =>
      isSelecionada
        ? isCorreta
          ? 'green'
          : 'red'
        : 'rgb(82, 54, 141)'};

    background-color:  ${({ isCorreta, isSelecionada }) =>
      isSelecionada
        ? isCorreta
          ? 'green'
          : 'red'
        : 'transparent'};
    cursor: pointer;

`
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//respostaCorreta == questions[numPergunta].answer
function Alternativas({numPergunta, setNumPergunta, vez, setVez}) {
    console.log(`Jogador: ${vez}`)
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
    const [respostaCorreta, setRespostaCorreta] = useState(null);
    
    if (numPergunta === null || !questions[numPergunta]) return null;

    function trocarVez() {
        console.log(`Vez: ${estadosJogador[vez]}`)
        const proximo = estadosJogador[vez].responder();
        setVez(proximo);
    }

    async function verificarResposta(el, evt) {

        if (el == evt) {
            setOpcaoSelecionada(evt)
            setRespostaCorreta(el)
            await esperar(3000);
            console.log(vez)
            trocarVez();
            setNumPergunta(Math.floor(Math.random() * questions.length))

        }else{
            setOpcaoSelecionada(evt)
            setRespostaCorreta(el)
            await esperar(3000);
            console.log(vez)
            trocarVez();
            setNumPergunta(Math.floor(Math.random() * questions.length))
        }
    }


    return(
        <Opcoes>
        {questions[numPergunta].options.map((el) => {
            const isSelecionada = el === opcaoSelecionada;
            const isCorreta = el === respostaCorreta;

                return(
                    <OpcoesDiv 
                    onClick={(evt) => verificarResposta(questions[numPergunta].answer, evt.target.innerText)}
                    isSelecionada={el === opcaoSelecionada}
                    isCorreta={el === respostaCorreta}
                    >
                    <p>{el}</p>
                    </OpcoesDiv>
                )
        })}
        </Opcoes>
    )
}

export default Alternativas;


{/* <Opcoes>
        {questions[numPergunta].options.map((el) => {
            const isSelecionada = el === opcaoSelecionada;
            const isCorreta = el === respostaCorreta;

                return(
                    <OpcoesDiv 
                    onClick={(evt) => verificarResposta(questions[numPergunta].answer, evt.target.innerText)}
                    isSelecionada={el === opcaoSelecionada}
                    isCorreta={el === respostaCorreta}
                    >
                    <p>{el}</p>
                    </OpcoesDiv>
                )
        })}
        </Opcoes> */}