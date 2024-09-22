'use client';

import { deleteTask, deleteTaskState } from '@/lib/actions/task.actions';
import { cn } from '@/lib/cn';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { CgSpinner } from 'react-icons/cg';

const initialState: deleteTaskState = { message: null, errors: {} };

const DeleteTask = ({ id }: { id: string }) => {
  const [state, formAction] = useFormState(deleteTask, initialState);

  return (
    <form action={formAction}>
      <input type='hidden' name='id' value={id} />
      <DeleteBtn />
      {state?.errors?.id && <p className='mt-1 text-xs italic text-red-500'>{state?.errors?.id[0]}</p>}
    </form>
  );
};

export default DeleteTask;

const DeleteBtn = () => {
  const { pending } = useFormStatus();

  return (
    <div className='flex items-center gap-2'>
      <button
        className={cn('secondary-button button button-sm', 'items-center gap-1')}
        type='submit'
        disabled={pending}
      >
        {pending ? <CgSpinner className='animate-spin' /> : null}
        {pending ? 'Loading...' : 'Delete'}
      </button>
    </div>
  );
};
