import React from 'react';
import styled from 'styled-components';
import LayoutMenu from './layoutMenu/LayoutMenu';
import Header from './header';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  margin-left: 256px;
  width: 100%;
`;

const Content = styled.div`
  margin: 24px 32px;
`;

// @ts-ignore
const LayoutComponent = ({ children }) => (
  <Container>
    <LayoutMenu />
    <Main>
      <Header />
      <Content>
        {children}
      </Content>
    </Main>
  </Container>
);

export default LayoutComponent;
