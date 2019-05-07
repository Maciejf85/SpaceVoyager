import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  padding:0;
}
html{
  font-size: 15px;
}
body{
  margin:0;
  font-family: 'Montserrat', sans-serif;
  background:#10181b;
  background-image:url('http://maciejf.pl/img/planets/5_small.jpg');
  background-position:static;
  background-repeat:no-repeat;
  background-size:cover;
  background-attachment: fixed;   
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
