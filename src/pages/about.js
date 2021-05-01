import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BigTitle from '../components/BigTitle';
import { FormattedMessage } from 'gatsby-plugin-intl';

export default function About() {
  return (
    <>
      <SEO
        title={`About - Gatsby Intl Flicker Demo`}>
      </SEO>
      <Layout>
        <BigTitle>
          <FormattedMessage id="about_title" />
        </BigTitle>
      </Layout>

    </>
  )
};