import styled from 'styled-components';

export const Container = styled.div`
  background-color: #dfe0e5;
  padding-top: 5rem;
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  justify-content: stretch;
  align-items: center;

  background-color: #f7f7f7;
  box-shadow: 0 10px 20px rgba(0,0,0,0.25);
`;

export const Title = styled.header`
  height: 5rem;
  min-height: 5rem;
  width: 100%;
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;

  color: #3dde94;
  font-weight: bold;
  font-size: 2rem;
`;

export const Footer = styled.footer`
  height: 5rem;
  min-height: 5rem;
  width: 100%;
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
  background-color: #3dde94;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  color: #f7f7f7;
  font-size: 1.5rem;
`;

export const Main = styled.div`
  flex: 1;
  align-self: stretch;
  justify-self: stretch;
`;