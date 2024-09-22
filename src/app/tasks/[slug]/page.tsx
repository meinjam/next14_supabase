import React from 'react';
import supabase from '@/config/supabase';
import { notFound } from 'next/navigation';
import AddEditTask from '@/components/tasks/AddEditTask.Component';

interface ParamsType {
  slug: string;
}

const page = async ({ params }: { params: ParamsType }) => {
  const { slug } = params;

  const { data, error } = await supabase.from('tasks').select().eq('slug', slug).single();

  console.log(data);
  console.log(error);

  if (error) {
    notFound();
  }

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <section>
      <div className='container'>
        <div className='mx-auto my-10 max-w-xl'>
          <AddEditTask task={data} />
        </div>
      </div>
    </section>
  );
};

export default page;
