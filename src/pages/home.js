import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='container mx-auto px-8 py-24'>
      <h1 className='text-6xl font-bold mb-2 text-center'>Hey, I'm Jordan.</h1>
      <h6 className='text-base text-center'>
        A creative developer based in Edmonton, Alberta.
      </h6>
      <div className='flex justify-center mt-8'>
        <Link to='/portfolio' className='border-b-2 border-gray-300 pb-1'>
          View Portfolio
        </Link>
      </div>
    </main>
  );
}
