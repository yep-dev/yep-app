import React from 'react'
import LayoutMenu from "./layoutMenu/LayoutMenu";
import styled from 'styled-components'
import {Button, PageHeader} from "antd";


const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  margin-left: 256px;
  width: 100%;
`

const StyledPageHeader = styled(PageHeader)`
  padding: 16px 32px;
  border-bottom: 1px solid #303030;
`

const Content = styled.div`
  margin: 24px 32px;
`

// @ts-ignore
const LayoutComponent = ({ children }) => (
  <Container>
    <LayoutMenu />
    <Main>
      <StyledPageHeader title="asd" extra={[<Button key="1" type="primary" size="large" danger>STOP</Button>]}>
      </StyledPageHeader>   
      <Content>
        {children}
      </Content>
    </Main>
  </Container>
)

export default LayoutComponent