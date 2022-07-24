const ArticlesQueries = {
  homePagePostAPI: `query {
        categories {
          id
          name
          slug
          articles {
            id
            title
            slug
            description
            category{
              name
            }
            author {
              id
              name
              picture{
                url
              }
            }
            image{
              url
            }
            createdAt
          }
        }
  }`,

  categoryPostAPI: `query categories($category_slug: String!){
      categories(where:{slug: $category_slug}) {
        id
        name
        slug
        articles {
          id
          title
          slug
          description
          category{
            name
          }
          author {
            id
            name
            picture{
              url
            }
          }
          image{
            url
          }
          createdAt
        }
      }
  }`,

  postDetailAPI: `query articles($article_slug: String!){
    articles(where:{slug: $article_slug}){
      id
      title
      slug
      views
      description
      content
      createdAt
      category{
        name
      }
      image{
        url
      }
      poster_image{
        url
      }
      author{
        id
        name
        details
        picture{
          url
        }
      }
    }
  }`,

  relatedPostAPI: `query categories($category_slug: String!){
    categories(where:{slug: $category_slug}) {
      id
      name
      slug
      articles {
        id
        title
        slug
        description
        category{
          name
        }
        author {
          id
          name
          picture{
            url
          }
        }
        image{
          url
        }
        createdAt
      }
    }
  }`
}
export default ArticlesQueries;