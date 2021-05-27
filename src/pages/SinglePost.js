import { useEffect, useState } from 'react';
import Axios from 'axios';
import strapi_url from './../helper';
import parse from 'html-react-parser';
export default function SinglePost({ props }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    return Axios.get(strapi_url + '/posts/' + props.match.params.id)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((err) => console.log(err));
  }, [props]);
  return (
    <main className='container mx-auto px-8 lg:px-20  pt-4'>
      {post ? (
        <article className='post'>
          <div>{parse(post.content)}</div>
        </article>
      ) : (
        'post'
      )}
    </main>
  );
}
