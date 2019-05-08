import styled from "styled-components";

const PersonList = styled.div`
  display: grid;
  grid-template-columns: 52% 48%;
  grid-template-rows: auto;

  .green {
    color: #54d422;
  }
  @media (max-width: 420px) {
    display: block;
  }
`;

export default PersonList;
