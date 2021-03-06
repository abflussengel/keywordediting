import React from 'react'
import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl'

import Layout from '../components/layout'

const SuccessPage = ({ intl }) => (
  <Layout>
    <h1>
      <FormattedHTMLMessage id="success" />
    </h1>
  </Layout>
)

export default injectIntl(SuccessPage)
