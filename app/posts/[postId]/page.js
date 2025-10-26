import { use } from 'react';
import axios from 'axios';

const PostDetails = ({ params }) => {
  const param = use(params);

  const data = async () => {
    return await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.data;
      });
  };

  const getPostById = async () => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${param.postId}`)
      .then((res) => {
        return res.data;
      });
  };

  const postById = use(getPostById());

  const posts = use(data());
  const post = posts.find((post) => post.id === parseInt(param.postId));

  return (
    <div className="text-center w-1/2 mx-auto mt-16">
      <h1 className="font-bold text-2xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
