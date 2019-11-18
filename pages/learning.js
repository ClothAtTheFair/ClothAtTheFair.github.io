import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Learning = () => (
<div>
<Head>
      <title>Learning</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css' />
    </Head>
    <Nav />

<h1>Who knows really. Trying next.js for the first time</h1>
<br></br>
<div>
    <h3>What I want to start learning and have a good understanding for the rest of 2019</h3>
    <ul>
        <li>Functional Programming</li>
        <li>Object Oriented Programming</li>
        <li>React</li>
        <li>Korean (very basics)</li>
    </ul>
</div>
<div>
    <h3>In 2020 I start grad school so a lot of learning will be based around classes but also</h3>
    <ul>
        <li>Korean (conversational)</li>
        <li>More to come</li>
    </ul>
</div>
</div>
)

export default Learning