import { Link } from 'react-router-dom';
import image from './../assets/img/code.jpg';
export default function About() {
  return (
    <main className='container mx-auto px-8 py-4'>
      <div className='md:flex'>
        <div className='md:w-6/12 md:mr-8 mb-4'>
          <img src={image} alt='' className='max-w-full' />
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-4'>About</h1>
          <p className='mb-2'>
            My name is Ajani Myers, I'm currently a full time student at NAIT,
            but in my down time you can catch me working on projects, at coding
            workshops, or spending time with my friends organizing.
          </p>
          <p className='mb-4'>
            If you're curious about the stack i use to develop applications, I
            currently use PostgreSQL, NodeJS, Express, and React. I at times
            will speed up api development by using strapi which is my favorite
            headless cms at the moment.
          </p>
          <Link to='/portfolio' className='border-b-2 border-gray-300 pb-1'>
            Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
