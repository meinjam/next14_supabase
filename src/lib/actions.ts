'use server';

import supabase from '@/config/supabase';
import { setTimeout } from 'timers/promises';
import { z } from 'zod';

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const SignInSchema = z.object({
  email: z.string().email('Please enter a valid email.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(16, 'Password must be at most 16 characters.'),
});

export const signIn = async (prevState: State | undefined, formData: FormData) => {
  //   await Promise.resolve(setTimeout(2000));

  const validatedFields = SignInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { email, password } = validatedFields.data;

  console.log(email, password);

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ task: 'new task', is_completed: true }])
    .select();

  console.log(data);
  console.log(error);

  //   fetch('https://dummyjson.com/auth/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       username: 'emilys',
  //       password: 'emilyspass',
  //       expiresInMins: 30, // optional, defaults to 60
  //     }),
  //     credentials: 'include', // Include cookies (e.g., accessToken) in the request
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
};
