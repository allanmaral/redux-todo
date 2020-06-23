import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  background-color: #f7f7f7;
  box-shadow: 0 3px 6px rgba(0,0,0,0.25);

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  border: 1px solid 	hsl(152, 71%, 55%);
  color: 	hsl(152, 71%, 55%);
  font-size: 1.0rem;
  cursor: pointer;
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    color: 	hsl(152, 71%, 70%);
    border-color: 	hsl(152, 71%, 70%);
  }
`;