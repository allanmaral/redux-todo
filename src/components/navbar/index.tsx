import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { doRequestRemoteToDo, doRequestSagaToDo } from '../../store/modules/todos/actions';

import { Nav, Button } from './styles';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleThunk = useCallback(() => {
    dispatch(doRequestRemoteToDo());
  }, [dispatch]);

  const handleSaga = useCallback(() => {
    dispatch(doRequestSagaToDo());
  }, [dispatch]);

  return (
    <Nav>
      <Button onClick={handleThunk}>
        Import with Thunk
      </Button>
      <Button onClick={handleSaga}>
        Import with Saga
      </Button>
    </Nav>
  );
};