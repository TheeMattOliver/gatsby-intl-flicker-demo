import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BigTitle from '../components/BigTitle';

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
      </Layout>

    </>
  )
};