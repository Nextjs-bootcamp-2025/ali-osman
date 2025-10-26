import Link from 'next/link';

const PostCard = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className="post w-[300px] shadow-lg p-4 cursor-pointer">
            <h2 className="text-xl font-bold">{post.title}</h2>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PostCard;
