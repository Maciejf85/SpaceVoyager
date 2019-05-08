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

  @media (max-width: 420px) {
    margin-top: 40px;
    font-size: 1.1rem;
  }
  @media (min-width: 421px) and (max-width: 1023px) and (orientation: landscape) {
    font-size: 0.7rem;
    /* text-align: center; */
    display: grid;
    grid-template-columns: 40% 30% 30%;
    grid-template-rows: auto auto;
  }
  @media (min-width: 421px) and (max-width: 1023px) {
    font-size: 1rem;
  }
`;

export default PlanetInfo;
