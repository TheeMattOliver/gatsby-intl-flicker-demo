import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import BigTitle from "../components/BigTitle"
import SEO from "../components/SEO"


export default function Home() {
  return (
    <>
      <SEO
        title={`Home`}>
      </SEO>
      <Layout>
        <BigTitle>
          <FormattedMessage id="home_title" />
        </BigTitle>
      </Layout>
    </>
  );
}
