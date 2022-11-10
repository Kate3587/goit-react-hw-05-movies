import { useState } from 'react';
import { Status } from 'services/config/Status';

export const useStateMachine = init => {
  const [state, setStateMachine] = useState(init);
  const success = state === Status.SUCCESS;
  const loading = state === Status.LOADING;
  const error = state === Status.ERROR;
  return { success, loading, error, setStateMachine };
};