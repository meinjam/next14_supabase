import AllTask from '@/components/tasks/AllTask.Component';
import Link from 'next/link';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <section>
      <div className='container'>
        <div className='mb-7 flex flex-col items-start justify-between sm:mb-0 sm:flex-row sm:items-center'>
          <h1 className='my-5 text-3xl'>This is tasks page</h1>
          <Link prefetch className='primary-button button' href='/tasks/create'>
            Create Task
          </Link>
        </div>

        <Suspense fallback={<Loading />}>
          <AllTask />
        </Suspense>
      </div>
    </section>
  );
};

export default page;

const Loading = () => {
  return (
    <div className='grid animate-pulse gap-5 md:grid-cols-2'>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className='flex items-center justify-between gap-3 rounded p-5 shadow' key={i}>
          <div className='w-full'>
            <h1 className='mb-1 h-6 w-full rounded bg-gray-200 md:w-2/3'></h1>
            <p className='h-3 w-20 rounded bg-gray-200'></p>
          </div>
          <div className='flex gap-3'>
            <div className='h-6 w-14 rounded bg-gray-200' />
            <div className='h-6 w-14 rounded bg-gray-200' />
          </div>
        </div>
      ))}
    </div>
  );
};
