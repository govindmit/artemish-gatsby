import { graphql, useStaticQuery } from "gatsby";
const usePageData = (id) => {
  console.log(id);
  const data = useStaticQuery(graphql`
    query MyQuery1($id: ID!) {
      wpcontent {
        page(idType: DATABASE_ID, id: $id) {
          title
          status
          slug
          content
        }
      }
    }
  `);
  return data.wpcontent.page;
};
export default usePageData;
