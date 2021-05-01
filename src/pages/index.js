import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import BigTitle from "../components/BigTitle"
import PageBody from "../components/PageBody"


export default function Home() {
  return (
    <>
      <Layout>
        <BigTitle>
          <FormattedMessage id="home_title" />
        </BigTitle>
        <PageBody>
          <h2>
            <FormattedMessage id="go_fix_message" /><span><a href="https://github.com/TheeMattOliver/gatsby-intl-flicker-demo"> repo</a>.</span>
          </h2>
        </PageBody>
      </Layout>
    </>
  );
}
