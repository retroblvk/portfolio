import { useEffect, useState } from 'react';
import Axios from 'axios';
import strapi_url from './../helper';

export default function Portfolio() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    document.title = 'retroblvk | Portfolio';
    console.log(strapi_url);
    Axios.get(strapi_url + '/projects')
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className='container mx-auto px-8 py-2'>
      <h1 className='text-4xl font-bold'>Portfolio</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-1 md:gap-4 pt-8'>
        {projects &&
          projects.map((project, index) => (
            <div className='card' key={index}>
              <img
                src={
                  'http://localhost:1337' +
                  project.projectImage[0].formats.medium.url
                }
                alt=''
                className='mb-2'
              />
              <h1 className='text-lg  mb-4'>{project.title}</h1>
              <ul className='flex'>
                {project.tags &&
                  project.tags.map((tag, tagIndex) => {
                    return (
                      <li key={tagIndex} className='mr-2'>
                        {tag.name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
      </div>
    </main>
  );
}
