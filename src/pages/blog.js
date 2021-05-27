import { useEffect, useState } from 'react';
import Axios from 'axios';
import strapi_url from './../helper';
import { Link } from 'react-router-dom';
export default function Blog() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    document.title = 'retroblvk | Blog';
    Axios.get(strapi_url + '/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className='container mx-auto px-8 py-2'>
      <h1 className='text-4xl font-bold'>My Blog</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-1 md:gap-4 pt-8'>
        {posts &&
          posts.map((post, index) => (
            <Link to={'/posts/' + post.id} key={index}>
              <div className='card'>
                <img
                  src={
                    process.env.NODE_ENV === 'development'
                      ? strapi_url + post.postImage.formats.small.url
                      : post.postImage.formats.small.url
                  }
                  alt=''
                  className=''
                />
                <h1 className='text-lg  mb-4 bg-black text-white px-4 py-4 font-bold'>
                  {post.title}
                </h1>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
