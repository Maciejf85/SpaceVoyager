import styled from "styled-components";

const H1 = styled.h1`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ big }) => (big ? "5em" : "3em")};
  letter-spacing: 5px;
  //   color: #58d122;
  span {
    color: #f9c32b;
    padding: 0 5px;
  }
`;

export default H1;
