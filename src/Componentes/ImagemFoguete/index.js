import ImgFoguete from '../../Imagens/foguete.png';
import styled from 'styled-components';

const DivImgFoguete = styled.div`
    width: 500px;
    height: 300px;
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 3;
`
const ImgFogueteEstilo = styled.img`
    width: 100%;
    height: 100%;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    z-index: -1;
`

function ImagemFoguete(params) {
    return (
        <DivImgFoguete>
            <ImgFogueteEstilo src={ImgFoguete} alt="Imagem de um alien"/>
        </DivImgFoguete>
    )
}

export default ImagemFoguete;