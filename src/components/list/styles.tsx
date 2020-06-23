import styled from 'styled-components';

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const EmptyItem = styled.li`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
`;

export const Item = styled.li`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: stretch;
  transition: color 0.2s ease-in-out;

  border-top: 1px solid #e8e8e8;

  &:last-child {
    border-bottom: 1px solid #e8e8e8;
  }

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const CompleteButton = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;

  border-right: 1px solid #e8e8e8;
  color: #dadada;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &.active, &:hover {
    color: hsl(152, 71%, 55%);
  }
`;

export const RemoveButton = styled.div`
  width: 5rem;
  height: 5rem;
  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  color: #dadada;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &.active, &:hover {
    color: hsl(0, 71%, 55%);
  }
`;

export const ItemDetail = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;