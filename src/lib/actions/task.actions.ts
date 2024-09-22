'use server';

import supabase from '@/config/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import slugify from 'slugify';
import { setTimeout } from 'timers/promises';
import { z } from 'zod';

export type createTaskState = {
  errors?: {
    task?: string[];
    is_completed?: string[];
  };
  message?: string | null;
};

export type updateTaskState = {
  errors?: {
    id?: string[];
    task?: string[];
    is_completed?: string[];
  };
  message?: string | null;
};

export type deleteTaskState = {
  errors?: {
    id?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  task: z.string().min(3, { message: 'Please enter a valid task.' }),
  is_completed: z.boolean(),
  slug: z.string(),
  created_at: z.string(),
});

const CreateUpdateTask = FormSchema.omit({
  id: true,
  slug: true,
  created_at: true,
});

const UpdateTask = FormSchema.omit({
  slug: true,
  created_at: true,
});

const DeleteTask = FormSchema.pick({ id: true });

export const createTask = async (prevState: createTaskState | undefined, formData: FormData) => {
  const validatedFields = CreateUpdateTask.safeParse({
    task: formData.get('task'),
    is_completed: formData.get('is_completed') ? true : false,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Tasks.',
    };
  }

  const { task, is_completed } = validatedFields.data;
  const { data, error } = await supabase
    .from('tasks')
    .insert([{ task, is_completed, slug: slugify(task, { lower: true }) }])
    .select();

  console.log(data);
  console.log(error);

  if (data) {
    revalidatePath('/tasks');
    redirect('/tasks');
  }
};

export const updateTask = async (prevState: updateTaskState | undefined, formData: FormData) => {
  const validatedFields = UpdateTask.safeParse({
    id: formData.get('id'),
    task: formData.get('task'),
    is_completed: formData.get('is_completed') ? true : false,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Tasks.',
    };
  }

  const { id, task, is_completed } = validatedFields.data;

  const { data, error } = await supabase.from('tasks').update({ task, is_completed }).eq('id', id).select();

  console.log(data);
  console.log(error);

  if (data) {
    revalidatePath('/tasks');
    revalidatePath(`/tasks/${id}`);
    redirect('/tasks');
  }
};

export const deleteTask = async (prevState: deleteTaskState | undefined, formData: FormData) => {
  // await setTimeout(2000);
  const validatedFields = DeleteTask.safeParse({
    id: formData.get('id'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Tasks.',
    };
  }

  const { id } = validatedFields.data;

  const { error } = await supabase.from('tasks').delete().eq('id', id);

  if (error) {
    return {
      errors: { id: [error.message] },
      message: 'Failed to delete the task.',
    };
  }

  revalidatePath('/tasks');
  // console.log(data, 'data');
};
