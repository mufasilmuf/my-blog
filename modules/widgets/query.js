const WidgetsQuery = {
  mostReadPostData: `query {
        articles(sort: "views:desc", limit: 4) {
          id
          title
          slug
          description
          category {
            name
            slug
          }
          author {
            id
            name
            picture {
              url
            }
          }
          image {
            url
          }
          createdAt
        }
  }`,

  featuredVideosData: `query{
    featuredVideos{
      id
      descripiton
      poster_img{
        url
      }
      video_url
      createdAt
    }
  }`
}
export default WidgetsQuery;