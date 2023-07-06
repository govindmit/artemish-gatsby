import * as React from "react"
import Layout from "../components/layouts.js";
import SEO from "../components/common/seo.js";
import VideoSec from "../components/AtrimeshHomeCmp/videoSec.js";
import { type HeadFC, type PageProps } from "gatsby";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
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
