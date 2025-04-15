import TelaPerguntas from '../TelaPerguntas';
import PerguntaAtual from '../PerguntaAtual';
import Alternativas from '../Altenativas';
import { questions } from '../Perguntas';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { estadosJogador } from '../EstadoJogador';
import corretoIcone from '../../Imagens/correto.png'

const DivTela = styled.div`
    background-color: rgb(40, 46, 110);
    position: relative;
    top: 20%;
    text-align: center;
    display: block;
    width: 95%;
    height: 75%;
    align-items: center;
    justify-content: center;
    margin: 5px 5px 5px 5px;
    
    /* border: 1px solid rgb(82, 54, 141); */
`
function TelaPergunta({vez, setVez}) {
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
        />
      </DivTela>
    );
  }
  
export default TelaPergunta;
