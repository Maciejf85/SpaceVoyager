import styled from "styled-components";

const Button = styled.button`
  position: ${({ module }) => (module ? "absolute" : "static")};
  bottom: 10px;
  right: 50%;
  transform: ${({ module }) => (module ? "translate(50%,0)" : "none")};
  width: 140px;
  height: 25px;
  background: transparent;
  border-radius: 20px;
  outline: none;
  border: none;
  border: 1px solid #ccc;
  color: white;
  margin: ${({ module }) => (module ? "none" : "0 10px")};

  :hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.4);
    font-weight: 700;
  }
  @media (min-width: 361px) and (max-width: 1024px) {
    position: absolute;
    bottom: 10px;
    right: 10px;
    transform: none;
    height: 25px;
    width: 70px;
  }
`;

export default Button;
