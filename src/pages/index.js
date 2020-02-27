import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>I'm Tim, a javascript developer living in Nizhny Novgorod</h2>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default IndexPage
