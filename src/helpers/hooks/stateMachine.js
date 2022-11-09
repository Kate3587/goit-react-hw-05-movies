import { useState } from 'react';
import { Status } from 'services/config/Status';

export const useStateMachine = init => {
  const [state, setStateMachine] = useState(init);
  const isResolved = state === Status.SUCCESS;
  const isLoad = state === Status.LOADING;
  const isRejected = state === Status.ERROR;
  return { isResolved, isLoad, isRejected, setStateMachine };
};