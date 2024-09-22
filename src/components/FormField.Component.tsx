import { cn } from '@/lib/cn';
import React from 'react';

interface FormFieldProps {
  label: string;
  errors?: string[];
}

const FormField = ({ label, errors }: FormFieldProps) => {
  return (
    <div className='mb-5'>
      <label htmlFor='task' className='mb-1 block'>
        {label}
      </label>
      <input
        className={cn('w-full rounded border px-3 py-2 focus:outline-none', errors && 'border-red-500')}
        type='text'
        name='task'
        id='task'
        placeholder='enter your task'
      />
      {errors && <p className='mt-1 text-xs italic text-red-500'>{errors[0]}</p>}
    </div>
  );
};

export default FormField;
