import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  color: #fff;
  border-radius: 30px;
  border: none;
  border: 1px solid white;
  background: transparent;
  width: 160px;
  height: 25px;
  outline: none;
  font-size: 1rem;
  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default CloseButton;
