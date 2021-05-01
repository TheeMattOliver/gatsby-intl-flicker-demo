import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BigTitle from '../components/BigTitle';
import PageBody from '../components/PageBody';

export default function Contact() {
  return (
    <>
      <SEO
        title={`Contact - Gatsby Intl Flicker Demo`}>
      </SEO>
      <Layout>
        <BigTitle>
          <FormattedMessage id="contact_title" />
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