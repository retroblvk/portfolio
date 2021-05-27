import { useEffect, useState } from 'react';
import Axios from 'axios';
import strapi_url from './../helper';

export default function Portfolio() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    document.title = 'retroblvk | Portfolio';

    Axios.get(strapi_url + '/projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className='container mx-auto px-8 lg:px-20 py-2'>
      <h1 className='text-4xl font-bold'>Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-1 md:gap-4 pt-8'>
        {projects &&
          projects.map((project, index) => (
            <div className='card shadow-2xl rounded-lg' key={index}>
              <h1 className='bg-custom-purple rounded-t-lg card-header text-lg px-4 py-4 font-bold'>
                {project.title}
              </h1>
              <img
                src={
                  process.env.NODE_ENV === 'development'
                    ? strapi_url + project.projectImage[0].formats.small.url
                    : project.projectImage[0].formats.small.url
                }
                alt=''
              />
              <div className='card-body rounded-b-lg py-2'>
                <ul className='flex px-4 py-2'>
                  {project.tags &&
                    project.tags.map((tag, tagIndex) => {
                      if (tag.name.toLowerCase() === 'react') {
                        return (
                          <li
                            key={tagIndex}
                            className='mr-2 text-white react px-2 py-1 rounded'
                          >
                            {tag.name}
                          </li>
                        );
                      } else if (tag.name.toLowerCase() === 'strapi') {
                        return (
                          <li
                            key={tagIndex}
                            className='mr-2 text-white strapi px-2 py-1 rounded'
                          >
                            {tag.name}
                          </li>
                        );
                      } else if (tag.name.toLowerCase() === 'tailwind css') {
                        return (
                          <li
                            key={tagIndex}
                            className='mr-2 text-white tailwind px-2 py-1 rounded'
                          >
                            {tag.name}
                          </li>
                        );
                      }
                      return <li key={tagIndex}>{tag.name}</li>;
                    })}
                </ul>
                <div className='flex justify-between'>
                  <a href={project.siteLink} className='px-4 py-4 font-bold'>
                    Website
                  </a>
                  <a href={project.githubLink} className='px-4 py-4 font-bold'>
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
