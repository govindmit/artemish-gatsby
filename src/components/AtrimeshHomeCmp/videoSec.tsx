import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import usePageData from "../../grapgqlquery/graphqlquery";
const GetPageId = graphql`
  query {
    wpcontent {
      allSettings {
        readingSettingsPageOnFront
      }
    }
 }`;
const VideoSec = () => {
  const datas = useStaticQuery(GetPageId);
  const id = datas?.wpcontent?.allSettings?.readingSettingsPageOnFront;
  const ids = { id: id }
  const pageData = usePageData(ids);
  //console.log("regkl", pageData)

  return <>
    hiii
  </>;
};
export default VideoSec;






//##########################  method  2nd #########################/////
// const Header = ({ data }: any) => (
//   <header>
//     {data?.wpcontent?.allSettings?.readingSettingsPageOnFront}
//   </header>
// )

// export default function MyHeader(props: any) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           wpcontent {
//             allSettings {
//               readingSettingsPageOnFront
//             }
//           }
//         }
//       `}
//       render={data => <Header data={data} {...props} />}
//     />
//   )
// }
