import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Page from '../shared/Page'
import HTMLText from '../../components/shared/HTMLText'
import Metadata from '../shared/Metadata'
import mainTextFrom from '../../data/mainTextFrom'
import mainImageSizesFrom from '../../data/mainImageSizesFrom'

const HomePage = ({ data }) => {
  const metadata = data.site.siteMetadata.metadata.home
  const { title } = data.site.siteMetadata.structure.pages.home

  return (
    <Page title={title}>
      <Metadata {...metadata} />
      <Img sizes={mainImageSizesFrom(data)} />
      <HTMLText htmlText={mainTextFrom(data)} />
    </Page>
  )
}

HomePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default HomePage
