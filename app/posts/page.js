// server page component
import axios from 'axios';
import PostCard from '../components/PostCard';

const Posts = async () => {
  // 1-  fetch data
  // 2 - create postCard component
  // 3 - import postCard component and pass data as a props
  // 4 display posts in posts page

  const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = data.data;

  return (
    <div className="w-full text-center">
      <h1 className="text-2xl underline mb-6">Posts</h1>
      <div className="w-full flex flex-wrap gap-4">
        <PostCard posts={posts} />
      </div>
    </div>
  );
};

export default Posts;
