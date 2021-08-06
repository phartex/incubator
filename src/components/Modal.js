import { useEffect, useState } from 'react';
import styled from 'styled-components';

import close from '../assets/img/36.png';

function Modal({ children, showModal, top, closeModal }) {
  //   const [height, setHeight] = useState(0);
  if (!showModal) return null;

  let height;
  if (typeof window !== undefined) {
    const getHeight = () => {
      return Math.max(window.innerHeight);
    };
    height = getHeight();
  }

  return (
    <BackDrop height={height} top={top}>
      <div className="close-container" onClick={closeModal}>
        <img src={close} alt=" close button" />
      </div>
      <div className="modal">{children}</div>
    </BackDrop>
  );
}

const BackDrop = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  img {
    width: 100%;
  }
  /* padding-bottom: 6rem; */
  background: rgba(0, 0, 0, 0.7);
  z-index: 5000;
  .close-container {
    position: absolute;
    right: 18px;
    top: 15px;
    width: 20px !important;
    cursor: pointer;
  }
  .modal {
    margin: 0 auto;
    margin-top: ${(props) => (props.top ? `${props.top}` : '5rem')};
    width: ${(props) => (props.width ? '' : '80%')};
  }
  @media (min-width: 768px) {
    .close-container {
      right: 20%;
      top: 30px;
      width: 20px !important;
    }
    .modal {
      width: ${(props) => (props.width ? '' : '50%')};
    }
  }
`;

export default Modal;
