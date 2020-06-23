import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 90%;
  height: 2.5rem;
  display: flex;
`;

export const InputWrapper = styled.div`
  flex: 1;
  justify-self: stretch;
  label {
    width: 100%;
    input {
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
      padding-left: 0.75rem;

      background-color: transparent;
      border: none;
      color: #f7f7f7;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  font-size: 1.5rem;
  color: #f7f7f7;
  border: none;
  background: none;
  width: 5rem;

  transition: font-size 0.2s ease-in-out;

  &:hover {
    font-size: 2rem;
  }
`;