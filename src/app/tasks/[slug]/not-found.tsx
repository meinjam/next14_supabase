import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <div className='container'>
        <div className='mx-auto my-10 flex max-w-xl flex-col items-center justify-center gap-5 rounded px-5 py-10 shadow'>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link prefetch href='/tasks' className='button primary-button inline-block'>
            Return to Tasks
          </Link>
        </div>
      </div>
    </section>
  );
}
