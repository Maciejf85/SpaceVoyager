import styled from "styled-components";

const PlanetInfo = styled.ul`
  height: 50%;
  font-weight: 300;
  font-size: 0.8rem;
  color: white;
  li {
    padding: 3px 0;
  }
  span {
    color: #f9c32b;
    font-weight: 700;
    padding: 0 5px;
  }
  ul > li {
    list-style-type: circle;
    margin-left: 30px;
    font-size: 0.78rem;
    padding: 1px 3px;
  }
  div {
    display: flex;
    color: red;
  }
`;

export default PlanetInfo;
