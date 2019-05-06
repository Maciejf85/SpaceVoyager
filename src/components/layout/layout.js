import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html{
  font-size: 15px;
}
body{
  padding:0;
  margin:0;
  font-family: 'Montserrat', sans-serif;
  background:#10181b;
  color:white;
}
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export default Layout;
