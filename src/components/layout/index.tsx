import React from 'react';
import { Navbar } from '../navbar';

import { Container, ContentWrapper, Content, Title, Footer, Main } from './styles';
import { Form } from '../form';
import { List } from '../list';

export const Layout = (
  { title = 'Today', children }: { title: string; children?: React.ReactNode | React.ReactNode[] }
) => {
  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <Content>
          <Title>{title}</Title>
          <Main>
            <List />
          </Main>
          <Footer>
            <Form />
          </Footer>
        </Content>
      </ContentWrapper>
    </Container>
  );
};