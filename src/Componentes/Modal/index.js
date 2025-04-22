import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components'
import imgRobo from '../../Imagens/Robôfelizcomtroféudourado.png'
import imgAlien from '../../Imagens/alienVitoria.png'

const Vimg = styled.img`
  width: 300px;
  height: 200px;
  display: flex;
  position: relative;
`


const DivImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  

`

const customStyles = {
  // background-color: #1E1E3F;
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1E1E3F',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    color: 'white',
    textAlign: 'center',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function Fim(modalIsOpen, jogador1_pontos, jogador2_pontos) {
  let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button> */}
        <div>{jogador1_pontos > jogador2_pontos ? "Vitória: Jogador 2" : "Vitória: Jogador 1"}</div>
        <DivImg>
          {jogador1_pontos > jogador2_pontos ? <Vimg src={imgRobo} alt="Robo" /> : <Vimg src={imgAlien} alt="Alien" />}
        </DivImg>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<App />, appElement);

export default Fim;