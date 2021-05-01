import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BigTitle from '../components/BigTitle';
import { FormattedMessage } from 'gatsby-plugin-intl';

export default function PageThree() {
  return (
    <>
      <SEO
        title={`Page 3 - Gatsby Intl Flicker Demo`}>
      </SEO>
      <Layout>
        <BigTitle>
          <FormattedMessage id="page_three_title" />
        </BigTitle>

      </Layout>

    </>
  )
};