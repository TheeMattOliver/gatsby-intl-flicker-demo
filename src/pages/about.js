import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BigTitle from '../components/BigTitle';
import PageBody from '../components/PageBody';
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
        <PageBody>
          <h2>
            <FormattedMessage id="go_fix_message" /><span><a href="https://github.com/TheeMattOliver/gatsby-intl-flicker-demo"> repo</a>.</span>
          </h2>
        </PageBody>
      </Layout>

    </>
  )
};