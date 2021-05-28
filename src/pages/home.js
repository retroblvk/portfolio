import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'retroblvk | Home';
  }, []);
  return (
    <main className='container mx-auto px-8 lg:px-20 py-24'>
      <h1 className='text-6xl font-bold mb-2 text-center'>
        Hey<span className='custom-purple'>,</span> I
        <span className='custom-purple'>'</span>m Jordan
        <span className='custom-purple'>.</span>
      </h1>
      <h6 className='text-base text-center'>
        A creative developer based in Edmonton, Alberta.
      </h6>
      <div className='flex justify-center mt-8'>
        <Link to='/portfolio' className='border-custom-purple pb-1'>
          View Portfolio
        </Link>
      </div>
    </main>
  );
}
