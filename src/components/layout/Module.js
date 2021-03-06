import styled from "styled-components";

const Module = styled.li`
  position: relative;
  width: 240px;
  height: 350px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 15px;
  margin: 10px 20px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.7);

  @media (max-width: 360px) {
    width: 100%;
    height: 70vh;
    margin-bottom: 30px;
  }
  @media (min-width: 361px) and (max-width: 1023px) and (orientation: landscape) {
    width: 100%;
    height: 60vh;
    margin-bottom: 30px;
  }
  @media (min-width: 361px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

export default Module;
