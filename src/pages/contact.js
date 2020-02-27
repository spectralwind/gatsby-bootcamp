import React from 'react'

import Layout from '../components/Layout'
import Head from '../components/Head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <h2>Email</h2>
      <p>The best way to reach me is via <a href="https://t.me/spectral_wind" rel="noopener noreferrer" target="_blank">Telegram</a></p>
    </Layout>
  )
}

export default ContactPage