import styled from "styled-components";

const H1 = styled.h1`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${({ big }) => (big ? "3rem" : "1.2rem")};
  letter-spacing: 5px;
  font-weight: 400;
  //   color: #58d122;
  span {
    margin-top: 15px;
    color: #f9c32b;
    padding: 0 5px;
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
  }
`;

export default H1;
