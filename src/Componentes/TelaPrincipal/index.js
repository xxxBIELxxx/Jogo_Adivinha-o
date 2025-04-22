import styled from 'styled-components'
import TelaPerguntas from '../TelaPerguntas';
import TelaInfoJogadores from '../InfoJogadores';
import { estadosJogador } from '../EstadoJogador';
import { useState, useEffect } from 'react';

const DivApp = styled.div`
  background-color: rgb(40, 46, 110);
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  /* align-items: center; */
  justify-content: center;
`


function TelaPrincipal(params) {
    const [vez, setVez] = useState('vez_jogador1')
    const [pontuacaoJgdr1, setPontuacaoJgdr1] = useState(0);
    const [pontuacaoJgdr2, setPontuacaoJgdr2] = useState(0);
    const [inicio, setInicio] = useState(true);

    // useEffect(() => {
    //     if ((vez === 'vez_jogador1') && inicio == false) {
    //         setPontuacaoJgdr1(prev => prev + 1);
    //     } else if ((vez === 'vez_jogador2') && inicio == false) {
    //         setPontuacaoJgdr2(prev => prev + 1);
    //     }
    //     setInicio(false);
    // }, [vez]);
    // console.log(`Vez Tela principal: ${vez}`)
    return(
        <DivApp>
            <TelaInfoJogadores 
            vez={vez}
            pontuacaoJgdr1={pontuacaoJgdr1}
            pontuacaoJgdr2={pontuacaoJgdr2}
            />
            <TelaPerguntas
            vez= {vez}
            setVez={setVez}
            pontuacaoJgdr1={pontuacaoJgdr1}
            pontuacaoJgdr2={pontuacaoJgdr2}
            setPontuacaoJgdr1={setPontuacaoJgdr1}
            setPontuacaoJgdr2={setPontuacaoJgdr2}
            inicio={inicio}
            setInicio={setInicio}
            />
        </DivApp>
    )
}

export default TelaPrincipal;