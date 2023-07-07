import React from "react";
import Layout from "../components/layouts";

export default function Template({ data }) {
    console.log(data)
  const { wpcontent: page } = data;
  const pageData = page?.page;

  console.log(pageData);

  return (
    <React.Fragment>
      <Layout />
      <div className="container-mm post__header">
        <div className="row">
          <div className="col-12">
            <h1 className="mm__head-14 tx_black mb-2">{pageData.title}</h1>
          </div>
        </div>
      </div>

      <div className="container-mm post__body">
        <div className="row">
          <div className="col-12">
            <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
