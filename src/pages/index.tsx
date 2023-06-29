import * as React from "react"
import Layout from "../components/layouts.js";
import SEO from "../components/common/seo.js";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const seoTitle = "Artemis Defense Institute";
  return (
    <>
      <Layout>
        <SEO title={seoTitle} />
        <div className="index-page">
          hii
        </div>
      </Layout>
    </>
  )
}
export default IndexPage
export const Head: HeadFC = () => <title>Artemis Defense Institute</title>
