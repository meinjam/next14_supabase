import AddEditTask from '@/components/tasks/AddEditTask.Component';
import React from 'react';

const page = () => {
  return (
    <section>
      <div className='container'>
        <div className='mx-auto my-10 max-w-xl'>
          <AddEditTask />
        </div>
      </div>
    </section>
  );
};

export default page;
