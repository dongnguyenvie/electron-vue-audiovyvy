export const getContenPost = `
query GET_POST_BY_ID($id: ID!) {
  post(id: $id) {
    title
    featuredImage {
      sourceUrl
    }
    content
    audioVideo
    categories {
      nodes {
        posts(first: 6) {
          nodes {
            id
            title
            uri
            featuredImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
`
