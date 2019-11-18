import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Blog = () => (
<div>
<Head>
      <title>Blog</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css' />
    </Head>
    <Nav />
<iframe className="blog" src="https://amazing-babbage-a08cab.netlify.com/"></iframe>

<style jsx>{`
      .blog{
          width: 100%;
          height: 48em;
      }
      
    `}</style>

</div>
)

export default Blog