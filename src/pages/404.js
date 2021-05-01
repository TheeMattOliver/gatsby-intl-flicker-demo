import React from "react"
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BigTitle from "../components/BigTitle"

export default function NotFoundPage() {
  return (
    <>
      <Layout>
        <SEO
          title={`404: not found`}
        />
        <BigTitle>
          <FormattedMessage id="404_title" />
        </BigTitle>
        <p>
          Sorry
        </p>
      </Layout>
    </>
  )
}
