import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./styles/global.css"
import { Header } from './components/Header'
import { NotFound } from './router/404'
import { Post } from './router/Post'


export const client = new ApolloClient({
  // Your api server endpoint
  uri: "",
  cache: new InMemoryCache(),

})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/post">
            <Route path=":id" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
