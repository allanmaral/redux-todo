import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaAngleDoubleRight } from 'react-icons/fa';

import { doCreateTodo } from '../../store/modules/todos/actions';

import { FormContainer, InputWrapper, Button } from './styles';

export const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    dispatch(doCreateTodo({ 
      id: new Date().getTime(), title, completed: false 
    }));
    setTitle('');
  }, [title, dispatch]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputWrapper>
        <label title="Nome" htmlFor="title">
          <input 
            placeholder="What should I do next?"
            type="text"
            id="title"
            value={title} 
            onChange={(evt) => setTitle(evt.target.value)} 
          />
        </label>
      </InputWrapper>
      <Button type="submit">
        <FaAngleDoubleRight />
      </Button>
    </FormContainer>
  );
};