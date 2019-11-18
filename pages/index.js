import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Branchleaf</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css' />
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to my website!</h1>
        <p className='description'>
            I started making this website to showcase my engineering projects<br></br>
            and to learn and grow in web development. 
            It is by no means finished so sit around as I learn things myself
      </p>

      <h2 className='header'>A Little About Me</h2>
        <p className='description'>It was a cold and rainy day in October. 
          My parents had given up hope that I would be born that day but little did they know I was starting a trend of being late.<br></br> 
          In high school I did FRC robotics and was captain of my team my senior year (2014).
          I was part of the programming team and my love for robotics and programming started there. <br></br>
          At the time of writing this I am working full time as a Research and Development Engineer learning Extreme Programming. </p>

      <h2 className='header'>Want to Contact Me?</h2>
       <p className='description'>Awesome!<br></br>
        As mentioned previously this is by no means the way I want to have this forever so for now if you would like to contact me then emailing <b>bradleybsf12@gmail.com</b> is
        the best method until I had in the proper social media buttons.</p>

    </div>

    <style jsx>{`
      .hero {
        background: lightblue;
        width: 100%;
        color: #333;
        height: 48em;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
        background: lightblue;
      }
      .header {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.10;
        font-size: 32px;
        background: lightblue;
      }
      .header,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        background: lightblue;
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
