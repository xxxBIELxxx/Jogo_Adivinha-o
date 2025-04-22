import TelaPerguntas from '../TelaPerguntas';
import PerguntaAtual from '../PerguntaAtual';
import Alternativas from '../Altenativas';
import Modal from '../Modal'
import { questions } from '../Perguntas';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { estadosJogador } from '../EstadoJogador';

const DivTela = styled.div`
    background-color: rgb(40, 46, 110);
    position: relative;
    top: 20%;
    text-align: center;
    display: block;
    width: 70%;
    height: 75%;
    align-items: center;
    justify-content: center;
    
    /* border: 1px solid rgb(82, 54, 141); */
`



function TelaPergunta({ vez, setVez, setPontuacaoJgdr1, setPontuacaoJgdr2, inicio, setInicio }) {
    console.log(`TelaPergunta: ${vez}`)
    const [numPergunta, setNumPergunta] = useState(null);
  
    useEffect(() => {
      const numeroAleatorio = Math.floor(Math.random() * questions.length);
      setNumPergunta(numeroAleatorio);
    }, []);
  
    if (numPergunta === null) return <div>Carregando pergunta...</div>;
  
    return (
      <DivTela>
        
        <PerguntaAtual numPergunta={numPergunta} />
        <Alternativas 
        numPergunta={numPergunta}
        setNumPergunta={setNumPergunta}
        vez={vez}
        setVez={setVez}
        setPontuacaoJgdr1={setPontuacaoJgdr1}
        setPontuacaoJgdr2={setPontuacaoJgdr2}
        inicio={inicio}
        setInicio={setInicio}
        />
      </DivTela>
    );
  }
  
export default TelaPergunta;
