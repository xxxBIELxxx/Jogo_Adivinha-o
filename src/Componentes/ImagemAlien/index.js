import ImgAlien from '../../Imagens/images_alien.png';
import styled from 'styled-components';


const DivImgAlien = styled.div`
    width: 500px;
    height: 300px;
    position: absolute;
    bottom: 0;
    left: 30px;
    z-index: 2;

    /* &:hover {
        background-color: #4CAF50; /* Green */
        /* color: white;
        box-shadow: 0px 5px 4px 6px #000; */ 
  
`
const ImgAlienEstilo = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`

function ImagemAlien(params) {
    return (
        <DivImgAlien>
            <ImgAlienEstilo src={ImgAlien} alt="Imagem de um alien"/>
        </DivImgAlien>
    )
}

export default ImagemAlien;   