import { Link } from 'react-router-dom'

interface Post {
  coverImage: {
    url: string;
  };
  description: string;
  id: string;
  publishedAt: string;
  title: string;
}

interface ListPostsProps {
  posts: Post[]
}

export function ListPosts({ posts }: ListPostsProps){
  return(
    <div className="flex w-full items-center flex-col">
      <span className="mt-5">
        <h1 className="text-3xl text-gray-600">Todos nossos posts</h1>
      </span>

      {posts.map(post => (
        <Link to={`/post/${post.id}`}>
          <div key={post.id} className="border-2 mx-6 rounded-md h-40 max-w-[1000px] flex gap-5 hover:border-orange-500 transition-colors mt-5 cursor-pointer">
            <img src={post.coverImage.url} alt="foto" className="w-[230px] hidden md:block"/>

            <span className="h-full flex flex-col justify-center pr-2 gap-2 overflow-hidden pl-5 md:pl-0">
              <h2 className="text-md md:text-2xl text-gray-700">{post.title}</h2>
              <p className="text-xs md:text-sm text-gray-500">{post.description}</p>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}