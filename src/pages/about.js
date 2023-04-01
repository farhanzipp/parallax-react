import React from 'react'
import Layout from '../components/Layout'
import '../styles/pages.css'
import { graphql } from 'gatsby'

const about = ({data}) => {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <div className='page-body'>
        <div className='page-container'>
          <h1 className='page-header'>ABOUT</h1>
          <main>
            <p>{title}</p>
            <p>{description}</p>
          </main>
        </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default about