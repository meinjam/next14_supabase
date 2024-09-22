'use client';

import { signIn, State } from '@/lib/actions';
import { cn } from '@/lib/cn';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const initialState: State = { message: null, errors: {} };

const Form = () => {
  const [state, formAction] = useFormState(signIn, initialState);

  return (
    <div className='mx-auto my-10 max-w-xl'>
      <form className='rounded px-5 py-10 shadow' action={formAction}>
        <h1 className='mb-5 text-3xl'>Sign In</h1>
        <div className='mb-5'>
          <label htmlFor='email' className='mb-1 block'>
            Email
          </label>
          <input
            className={cn(
              'w-full rounded border px-3 py-2 focus:outline-none',
              state?.errors?.email && 'border-red-500'
            )}
            type='email'
            name='email'
            id='email'
            placeholder='enter your email'
          />
          {state?.errors?.email && <p className='mt-1 text-xs italic text-red-500'>{state.errors.email[0]}</p>}
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='mb-1 block'>
            Password
          </label>
          <input
            className={cn(
              'w-full rounded border px-3 py-2 focus:outline-none',
              state?.errors?.password && 'border-red-500'
            )}
            type='password'
            id='password'
            name='password'
            placeholder='enter your password'
          />
          {state?.errors?.password && <p className='mt-1 text-xs italic text-red-500'>{state.errors.password[0]}</p>}
        </div>
        <SubmitBtn />
      </form>
    </div>
  );
};

export default Form;

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className='rounded bg-primary px-4 py-2 text-white duration-300 hover:bg-primary/80 disabled:opacity-80'
      type='submit'
      disabled={pending}
    >
      {pending ? 'Signing In...' : 'Sign In'}
    </button>
  );
};
