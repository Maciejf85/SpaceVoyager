import styled from "styled-components";

const PageList = styled.li`
  color: ${({ isActive }) => (isActive ? "#f9c32b" : "black")};
  font-weight: 700;
  padding: 0 5px;
  font-size: ${({ isActive }) => (isActive ? "1.3rem" : "1rem")};
`;

export default PageList;
