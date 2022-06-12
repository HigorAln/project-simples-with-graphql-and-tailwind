import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query{
    posts {
      id
      title
      publishedAt
      description
      coverImage{
        url(transformation: { image: { resize: { width: 300, height: 300}}})
      }
    }
  }
`