import styled from 'styled-components';
import { questions } from '../Perguntas';
import { useState, useEffect } from 'react';
import { estadosJogador } from '../EstadoJogador';
import Fim from '../Modal';

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
    /* margin: 2px; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    /* border: 3px solid rgb(82, 54, 141); */
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
function Alternativas({numPergunta, setNumPergunta, vez, setVez, setPontuacaoJgdr1, setPontuacaoJgdr2, inicio, setInicio, pontuacaoJgdr1, pontuacaoJgdr2}) {
    console.log(`Jogador: ${vez}`)
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
    const [respostaCorreta, setRespostaCorreta] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    
    // useEffect(() => {
    //         if (vez === 'vez_jogador1' && !inicio) {
    //             if (respostaCorreta === opcaoSelecionada) {
    //                 setPontuacaoJgdr1(prev => prev + 1);
    //             }
    //             setInicio(false);
    //         }
    //        else if ((vez === 'vez_jogador2') && !inicio) {
    //             if(respostaCorreta === opcaoSelecionada){
    //                 setPontuacaoJgdr2(prev => prev + 1);
    //             }
    //             setInicio(false);
            
    //     }
        
    // }, [vez, inicio, opcaoSelecionada, respostaCorreta, setPontuacaoJgdr1, setPontuacaoJgdr2, setInicio]);


    function trocarVez() {
        console.log(`Vez: ${estadosJogador[vez]}`)
        const proximo = estadosJogador[vez].responder();
        setVez(proximo);
    }



    async function verificarResposta(el, evt) {
        setOpcaoSelecionada(evt);
        setRespostaCorreta(el);
    
        const acertou = el === evt;
    
        if (acertou) {
            if (vez === 'vez_jogador1') {
                setPontuacaoJgdr2(prev => prev + 1);
            } else if (vez === 'vez_jogador2') {
                setPontuacaoJgdr1(prev => prev + 1);
            }
        } else if(!acertou){
            setIsOpen(true)
        }
    
        await esperar(3000);
        trocarVez();
        setNumPergunta(Math.floor(Math.random() * questions.length));
        setInicio(false);
    }
    

    if (numPergunta === null || !questions[numPergunta]) return null;

    return (
        modalIsOpen ? (
            <Fim 
                parentSelector={() => document.querySelector('#root')}
            />
        ) : (
            <Opcoes>
                {questions[numPergunta].options.map((el) => {
                    return (
                        <OpcoesDiv
                            key={el}
                            onClick={(evt) =>
                                verificarResposta(
                                    questions[numPergunta].answer,
                                    evt.target.innerText
                                )
                            }
                            isSelecionada={el === opcaoSelecionada}
                            isCorreta={el === respostaCorreta}
                        >
                            <p>{el}</p>
                        </OpcoesDiv>
                    );
                })}
            </Opcoes>
        )
    );
}

export default Alternativas;


{/* <Opcoes>
{questions[numPergunta].options.map((el) => {
    const isSelecionada = el === opcaoSelecionada;
    const isCorreta = el === respostaCorreta;
    console.log(`Elemento: ${el} Selecionada: ${isSelecionada} Correta: ${isCorreta}`)
    
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