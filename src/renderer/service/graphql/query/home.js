export const getHomePosts = `
query GET_POSTS($first: Int) {
  hot: posts(first: $first, where: {categoryNotIn: [1, 13], tag: "top-truyen", exRandom: true, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  new: posts(first: $first, where: {categoryNotIn: [1, 13], exRandom: true, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  _tienhiep: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 11, exRandom: true, status: PUBLISH}) {
    nodes {
      postId
      title
      uri
      id
      featuredImage {
        sourceUrl
      }
    }
  }
  _ma: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 28, exRandom: true, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  _quan_truong: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 6, exRandom: true, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
}
`

export const getCategories = `
query getCategory {
  categories(where: {exclude: [1]}) {
   	nodes {
      id
      name
      slug
    }
  }
}
`
