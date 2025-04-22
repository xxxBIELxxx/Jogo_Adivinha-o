import styled from 'styled-components'
import ImgAlien from '../../Imagens/images_alien.png';
import ImgRobo from '../../Imagens/images_robo6.png';


const DivJogadores = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const DivInfo = styled.div`
    display: flex;
    width: 100%;
    height: 40%;
    left: 10px;
    position: relative;
    flex-direction: row;
    margin: 10px;
`

const Tituloh1 = styled.h1`
    font-size: 20px;
    opacity: 100%;
    color: white;
    margin: 10px;
`

const ImgEstilo = styled.img`
    width: 100%;
    height: 100%;
    left: 5px;
    position: relative;
`
const ImgRoboEstilo = styled.img`
    width: 100px;
    height: 100px;
    left: 5px;
    position: absolute;
`

const DivSubInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: collum;
    position: relative;
`
const Divimg = styled.div`
    display: flex;
    height: 100%;
    width: 10%;
    position: relative;
`
const DivRef = styled.div`
    background-color:rgb(246, 19, 3);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: relative;
    display: inline;
`
function Jogadores({vez, pontuacaoJgdr1, pontuacaoJgdr2}){
    return(
        <DivJogadores>
            <DivInfo>
                <Divimg>
                    <ImgEstilo src={ImgAlien} alt="Imagem de um alien"/>
                </Divimg>
                <DivSubInfo>
                    <Tituloh1>Jogador 1</Tituloh1>
                    <Tituloh1>Pontuação: {pontuacaoJgdr2}</Tituloh1>
                    {vez === 'vez_jogador1' ? <DivRef/> : null}
                </DivSubInfo>
            </DivInfo>
            <DivInfo>
                <Divimg>
                    <ImgEstilo src={ImgRobo} alt="Imagem de um alien"/>
                </Divimg>
                <DivSubInfo>
                    <Tituloh1>Jogador 2</Tituloh1>
                    <Tituloh1>Pontuação: {pontuacaoJgdr1}</Tituloh1>
                    {vez === 'vez_jogador2' ? <DivRef/> : null}
                </DivSubInfo>
            </DivInfo>
        </DivJogadores>
    )
}

export default Jogadores;
