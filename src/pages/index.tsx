import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../components/layouts";
import SEO from "../components/common/seo";
import VideoSec from "../components/AtrimeshHomeCmp/videoSec";
const IndexPage: React.FC<PageProps> = () => {
  const seoTitle = "Artemis Defense Institute";
  const client = new ApolloClient({
    uri: 'https://artemish.mangoitsol.com/wp-json',
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <SEO title={seoTitle} />
          <VideoSec />
        </Layout>
      </ApolloProvider>
    </>
  )
}
export default IndexPage
export const Head: HeadFC = () => <title>Artemis Defense Institute</title>
