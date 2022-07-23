import { gql } from '@apollo/client';

const Common = {
    headerData: gql`query{
        categories{
          id
          name
          slug
        }
      }`
}
export default Common;