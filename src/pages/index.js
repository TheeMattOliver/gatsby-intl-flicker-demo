import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import BigTitle from "../components/BigTitle"


export default function Home() {
  return (
    <>
      <Layout>
        <BigTitle>
          <FormattedMessage id="home_title" />
        </BigTitle>

      </Layout>
    </>
  );
}
