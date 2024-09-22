'use client';

import { createTask, createTaskState, updateTask, updateTaskState } from '@/lib/actions/task.actions';
import { cn } from '@/lib/cn';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { CgSpinner } from 'react-icons/cg';

const initialState: createTaskState | updateTaskState = { message: null, errors: {} };

interface AddEditTaskTypes {
  task?: {
    task?: string;
    is_completed?: boolean;
    slug?: string;
    created_at?: string;
    id?: string | number;
  };
}

const AddEditTask = ({ task }: AddEditTaskTypes) => {
  const actionName = task ? updateTask : createTask;

  const [state, formAction] = useFormState(actionName, initialState);

  return (
    <form className='rounded px-5 py-10 shadow' action={formAction}>
      <h1 className='mb-5 text-3xl'>{task ? 'Edit' : 'Create'} Task</h1>
      <div className='mb-5'>
        <label htmlFor='task' className='mb-1 block'>
          Task Name
        </label>
        <input
          className={cn('w-full rounded border px-3 py-2 focus:outline-none', state?.errors?.task && 'border-red-500')}
          type='text'
          name='task'
          id='task'
          placeholder='enter your task'
          defaultValue={task?.task}
        />
        {state?.errors?.task && <p className='mt-1 text-xs italic text-red-500'>{state.errors.task[0]}</p>}
      </div>
      <div className='mb-5'>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            className='accent-primary'
            name='is_completed'
            id='is_completed'
            defaultChecked={task?.is_completed}
          />
          <label htmlFor='is_completed' className='cursor-pointer'>
            Is Completed
          </label>
        </div>
        {state?.errors?.is_completed && (
          <p className='mt-1 text-xs italic text-red-500'>{state.errors.is_completed[0]}</p>
        )}
      </div>

      {task ? <input type='hidden' name='id' value={task?.id} /> : null}

      <SubmitBtn mode={task ? 'edit' : 'create'} />
    </form>
  );
};

export default AddEditTask;

const SubmitBtn = ({ mode }: { mode: 'edit' | 'create' }) => {
  const { pending } = useFormStatus();
  const router = useRouter();

  return (
    <div className='flex items-center gap-2'>
      <button className={cn('primary-button button', 'items-center gap-2')} type='submit' disabled={pending}>
        {pending ? <CgSpinner className='animate-spin' /> : null}
        {pending ? 'Loading...' : <>{mode === 'create' ? 'Create' : 'Update'}</>}
      </button>
      <button type='button' onClick={() => router.back()} className='secondary-button button'>
        Cancel
      </button>
    </div>
  );
};
