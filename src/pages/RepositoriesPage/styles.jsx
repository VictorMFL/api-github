import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Carregamento = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid #e5e5e5;
  border-top-color: #51d4db;
  animation: rotacao 1s infinite;

  @keyframes rotacao {
    to {
      transform: rotate(1turn);
    }
  }
`

export const Container = styled.main`
  display: flex;
  min-height: 100%;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${props => props.theme.colors.background};
  min-width: 20rem;
  max-height: 100%;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${props => props.theme.colors.container};
  width: 100%;
  min-height: 100%;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
