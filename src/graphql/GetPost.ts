import { gql } from "@apollo/client";


export const GET_POST = gql`
  query($id: ID!) {
    post(where: {id: $id }) {
      id
      title
      publishedAt
      content {
        text
      }
      coverImage{
        url
      }
    }
  }
`