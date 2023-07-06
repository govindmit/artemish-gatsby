import { gql, useQuery } from "@apollo/client";
const MY_QUERY = gql`
  query MyQuery {
    wpcontent {
      page(idType: DATABASE_ID, id: "102280") {
        title
        status
        slug
        content
      }
    }
  }
`;
const usePageData = ({ id }: any) => {
  const { loading, error, data } = useQuery(MY_QUERY);
  console.log(data);

  if (loading) {
    console.log("loading");
  }

  if (error) {
    console.log(error);
  }
  //   let ids = id.toString();
  //   const MY_QUERY = gql`
  //     query MyQuery($id: String!) {
  //       wpcontent {
  //         page(idType: DATABASE_ID, id: $id) {
  //           title
  //           status
  //           slug
  //           content
  //         }
  //       }
  //     }
  //   `;
  //   const data = useQuery(MY_QUERY, {
  //     variables: { ids },
  //   });
  //console.log(data);
  //   return data.wpcontent.page;
};
export default usePageData;
