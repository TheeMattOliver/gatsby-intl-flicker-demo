import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BigTitle from '../components/BigTitle';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SecondaryNav from '../components/SecondaryNav';

import ContentSectionOne from '../components/ContentSectionOne'
import ContentSectionTwo from '../components/ContentSectionTwo'
import ContentSectionThree from '../components/ContentSectionThree'
import ContentSectionFour from '../components/ContentSectionFour'

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
        <SecondaryNav />
        <ContentSectionOne />
        <ContentSectionTwo />
        <ContentSectionThree />
        <ContentSectionFour />
      </Layout>

    </>
  )
};