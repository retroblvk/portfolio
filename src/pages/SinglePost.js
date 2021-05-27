import { useEffect, useState } from 'react';
import Axios from 'axios';
import strapi_url from './../helper';
import parse from 'html-react-parser';
export default function SinglePost({ props }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    Axios.get(strapi_url + '/posts/' + props.match.params.id)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className='container mx-auto px-24 py-2'>
      {post ? (
        <article className='post'>
          <img
            src={
              process.env.NODE_ENV === 'development'
                ? strapi_url + post.postImage.formats.small.url
                : post.postImage.formats.small.url
            }
            alt=''
            className='md:float-left  mr-8 w-full md:w-6/12 lg:w-5/12 mb-3'
          />
          <div>
            <h1 className='text-4xl font-bold w-full mb-4'>{post.title}</h1>
            {parse(post.content)}
          </div>
        </article>
      ) : (
        'post'
      )}
    </main>
  );
}
