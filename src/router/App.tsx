import { useQuery } from "@apollo/client"
import { ListPosts } from "../components/ListPosts"
import { GET_ALL_POSTS } from "../graphql/GetAllPosts"
import { useNavigate } from 'react-router-dom'

function App() {
  const { data,  loading, error } = useQuery(GET_ALL_POSTS)
  const navigate = useNavigate();

  if (loading) return <h1>spinner...</h1>

  if ( error ) navigate("/404")

  return (
    <div className="w-[100vw] flex justify-center">
      <div className="container w-full"> 
        <ListPosts posts={data.posts}/>
      </div>
    </div>
  )
}

export default App
