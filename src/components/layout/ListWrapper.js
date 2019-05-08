import styled from "styled-components";

const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export default ListWrapper;
