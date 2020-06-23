import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheck, FaTimes } from 'react-icons/fa';

import { doUpdateTodo, doDeleteTodo } from '../../store/modules/todos/actions';
import { ToDo } from '../../interfaces/todo';
import { StoreType } from '../../store';

import { ItemList, EmptyItem, Item, CompleteButton, ItemDetail, RemoveButton } from './styles';


export const List = () => {
  const dispatch = useDispatch();
  const unsortedTodos = useSelector<StoreType, ToDo[]>(
    store => store.todosReducer.todos
  );
  
  const todos = useMemo(() => [...unsortedTodos].sort(
    (a, b) => a.completed && !b.completed ? -1 : 1 
  ), [unsortedTodos]);


  const toggleChecked = useCallback((todo: ToDo) => {
    dispatch(doUpdateTodo({ ...todo, completed: !todo.completed }));
  }, [dispatch]);

  const deleteItem = useCallback((todo: ToDo) => {
    dispatch(doDeleteTodo(todo));
  }, [dispatch]);

  return (
    <ItemList>
      {todos.length === 0 && (
      <EmptyItem>
        <span>
          Nenhuma tarefa pendente
        </span>
      </EmptyItem>
      )}
      {todos.map(todo => 
        <Item key={todo.id}>
          <CompleteButton 
            onClick={() => toggleChecked(todo)}
            className={todo.completed ? 'active' : undefined}
          >
            <FaCheck />
          </CompleteButton>
          <ItemDetail>
            {todo.title}
          </ItemDetail>
          <RemoveButton onClick={() => deleteItem(todo)}>
            <FaTimes />
          </RemoveButton>
        </Item>
      )}
    </ItemList>
  );
};