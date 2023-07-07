import { gql, useQuery } from "@apollo/client";

const usePageData = ({ id }: any) => {
  const MY_QUERY = gql`
    query MyQuery($id: ID!) {
      wpcontent {
        page(id: $id, idType: DATABASE_ID) {
          title
          status
          slug
          content
        }
      }
    }
  `;
  const data = useQuery(MY_QUERY, {
    variables: { id },
  });

  //console.log(data);

  //return data;
};
export default usePageData;
