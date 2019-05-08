import styled from "styled-components";

const H1 = styled.h1`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${({ big }) => (big ? "3rem" : "1.2rem")};
  letter-spacing: 5px;
  font-weight: ${({ big }) => (big ? "700" : "400")};
  span {
    margin-top: 15px;
    color: #f9c32b;
    padding: 0 5px;
    font-size: 1.9rem;
    font-weight: 700;
    font-style: italic;
  }

  @media (max-width: 360px) {
    font-size: ${({ big }) => (big ? "2rem" : "1.4rem")};
  }
`;

export default H1;
