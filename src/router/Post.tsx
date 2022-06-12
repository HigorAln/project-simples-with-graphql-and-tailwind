import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_POST } from '../graphql/GetPost';

interface PostQueryProps {
  post: {
    content: {
      text: string;
    };
    coverImage: {
      url: string;
    };
    title: string;
    id: string;
    publishedAt: string;
  }
}

export function Post(){
  const { id } = useParams();
  const navigate = useNavigate()
  const {data, loading, error} = useQuery<PostQueryProps>(GET_POST, {
    variables: {
      id
    }
  })

  if (loading) return <h1>spinner...</h1>

  if ( error ) navigate("/404")

  return(
    <div className="flex justify-center">
      <div className="container w-full pt-1"> 
        <img src={data?.post.coverImage.url} alt="post image" className='w-full h-[calc(100vh-80px)]' />

        <h1 className='text-3xl my-5'>{data?.post.title}</h1>

        <p dangerouslySetInnerHTML={ {__html: data?.post.content.text.replace(/\\n/ig,"<br/>")!} } />
      </div>
    </div>
  )
}