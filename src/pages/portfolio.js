export default function Portfolio() {
  return (
    <main className='container mx-auto px-8 py-2'>
      <h1 className='text-4xl font-bold'>Portfolio</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-1 md:gap-4 pt-8'>
        <div className='card mb-4'>
          <img
            src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
            className='h-50 w-full mb-2'
          />
          <h1>Some Project</h1>
          <ul className='flex flex-wrap tags font-bold'>
            <li className='mr-2'>Personal</li>
            <li className='mr-2'>React</li>
            <li className='mr-2'>Strapi</li>
          </ul>
          <ul className='flex'>
            <li className='mr-2'>Github</li>
            <li>Site</li>
          </ul>
        </div>
        <div className='card mb-4'>
          <img
            src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
            className='h-50 w-full mb-2'
          />
          <h1>Some Project</h1>
          <ul className='flex flex-wrap tags font-bold'>
            <li className='mr-2'>Personal</li>
            <li className='mr-2'>React</li>
            <li className='mr-2'>Strapi</li>
          </ul>
          <ul className='flex'>
            <li className='mr-2'>Github</li>
            <li>Site</li>
          </ul>
        </div>
        <div className='card mb-4'>
          <img
            src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
            className='h-50 w-full mb-2'
          />
          <h1>Some Project</h1>
          <ul className='flex flex-wrap tags font-bold'>
            <li className='mr-2'>Personal</li>
            <li className='mr-2'>React</li>
            <li className='mr-2'>Strapi</li>
          </ul>
          <ul className='flex'>
            <li className='mr-2'>Github</li>
            <li>Site</li>
          </ul>
        </div>
        <div className='card mb-4'>
          <img
            src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
            className='h-50 w-full mb-2'
          />
          <h1>Some Project</h1>
          <ul className='flex flex-wrap tags font-bold'>
            <li className='mr-2'>Personal</li>
            <li className='mr-2'>React</li>
            <li className='mr-2'>Strapi</li>
          </ul>
          <ul className='flex'>
            <li className='mr-2'>Github</li>
            <li>Site</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
