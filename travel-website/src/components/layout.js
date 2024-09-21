import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

const Main = styled.main`
  min-height: calc(100vh - 120px);
  padding: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;