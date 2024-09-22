import React from 'react';

const loading = () => {
  return (
    <section>
      <div className='container'>
        <div className='mx-auto my-10 max-w-xl animate-pulse'>
          <div className='rounded px-5 py-10 shadow'>
            <h1 className='mb-8 h-10 w-2/3 rounded bg-gray-200 md:w-2/4'></h1>
            <p className='h-5 w-20 rounded bg-gray-200'></p>
            <p className='mb-4 mt-2 h-10 w-full rounded bg-gray-200'></p>
            <p className='h-5 w-40 rounded bg-gray-200'></p>
            <div className='mt-5 flex items-center gap-2'>
              <div className='h-10 w-24 rounded bg-gray-200' />
              <div className='h-10 w-24 rounded bg-gray-200' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
