import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import usePageData from "../../grapgqlquery/graphqlquery";

const GetPageId = graphql`
  query MyQuery {
    wpcontent {
      allSettings {
        readingSettingsPageOnFront
      }
    }
  }
`;
const VideoSec = () => {
  const datas = useStaticQuery(GetPageId);
  const id = datas?.wpcontent?.allSettings?.readingSettingsPageOnFront;
  const pageData = usePageData("102280");
  console.log(pageData);
  return <>{/* {id ? <MyComponent id={id} /> : ""} */}</>;
};
export default VideoSec;

// const MyComponent = ({ id }) => {
//   console.log(id);
//   // const data = useStaticQuery(graphql`
//   //   query MyQuery1($id: ID!) {
//   //     wpcontent {
//   //       page(idType: DATABASE_ID, id: $id) {
//   //         title
//   //         status
//   //         slug
//   //         content
//   //       }
//   //     }
//   //   }
//   // `);

//   // const { wpcontent } = data;
//   // const { page } = wpcontent;
//   // console.log(wpcontent);
//   //   return <div></div>;
// };
