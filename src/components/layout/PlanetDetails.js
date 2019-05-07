import styled from "styled-components";

const PlanetDetails = styled.ul`
  position: relative;
  height: 700px;
  min-height: 700px;
  width: 550px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  padding: 10px 15px;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.7);
  font-size: 0.78rem;
  border-radius: 30px;

  li {
    padding: 2px;
    width: 100%;
  }

  span {
    color: #f9c32b;
    font-weight: 700;
    font-size: 0.75rem;
    padding: 0 5px;
  }
  ul > li {
    list-style-type: circle;
    margin-left: 30px;
  }
`;

export default PlanetDetails;
