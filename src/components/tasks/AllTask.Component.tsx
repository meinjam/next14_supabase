import React from 'react';
import supabase from '@/config/supabase';
import Link from 'next/link';
import DeleteTask from '@/components/tasks/DeleteTask.Component';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const AllTask = async () => {
  let { data: tasks, error } = await supabase.from('tasks').select('*').order('id', { ascending: false });
  // console.log(tasks, error);

  return (
    <div className='grid gap-5 md:grid-cols-2'>
      {tasks?.map((task) => (
        <div key={task?.id} className='flex items-center justify-between gap-3 rounded p-5 shadow'>
          <div className='overflow-hidden'>
            <h1 className='block overflow-hidden text-ellipsis whitespace-nowrap'>{task?.task}</h1>
            <p className='text-xs'>
              {task?.is_completed ? (
                <span className='text-green-600'>Completed</span>
              ) : (
                <span className='text-amber-500'>Incomplete</span>
              )}
            </p>
            <p className='text-[10px]'>{dayjs(task?.created_at).fromNow()}</p>
          </div>
          <div className='flex gap-3'>
            <Link prefetch href={`/tasks/${task?.slug}`} className='secondary-button button button-sm'>
              Edit
            </Link>
            <DeleteTask id={task?.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
