import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";




const DivBtn = styled.div`
    background-color: #252772; 
    position: relative;
    border: none;
    color: rgb(230, 204, 58);
    padding: 15px 32px;
    height: 70px;
    width: 400px;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0px 5px 4px 6px #000;
    z-index: 3;

    &:hover {
        background-color: #2980b9;
    }
`


function BotaoStart(params) {

    const navigate = useNavigate();

    return(
        <DivBtn onClick={() => navigate("/quiz")}>
            <h1>Start</h1>
            
        </DivBtn>
    )
}

export default BotaoStart;  
