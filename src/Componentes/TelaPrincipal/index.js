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
    // console.log(`Vez Tela principal: ${vez}`)
    return(
        <DivApp>
            <TelaInfoJogadores vez={vez}/>
            <TelaPerguntas
            vez= {vez}
            setVez={setVez}
            />
        </DivApp>
    )
}

export default TelaPrincipal;