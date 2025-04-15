import ImgRobo from '../../Imagens/images_robo6.png';
import styled from 'styled-components';

const DivImgRobo = styled.div`
    width: 500px;
    height: 300px;
    right: 90px;
    position: absolute;
    bottom: 0;
    z-index: 2;
`

const ImgRoboEstilo = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`

function ImagemRobo(params) {
    return (
        <DivImgRobo>
            <ImgRoboEstilo src={ImgRobo} alt="Imagem de um alien"/>
        </DivImgRobo>
    )
}

export default ImagemRobo;   