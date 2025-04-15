import styled from 'styled-components';
import BtnStart from '../BotaoStart';
import ImagemAlien from '../ImagemAlien';
import ImagemFoguete from '../ImagemFoguete';
import ImagemRobo from '../ImagemRobo';
import Titulo from '../Titulo';

const DivApp = styled.div`
  background-color: rgb(40, 46, 110);
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

function TelaInicial(){
    return(
        <DivApp>
            <Titulo/>
            <BtnStart/>
            <ImagemAlien/>
            <ImagemRobo/>
            <ImagemFoguete/>
        </DivApp>

    )
}

export default TelaInicial;
