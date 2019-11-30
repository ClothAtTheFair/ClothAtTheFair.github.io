import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const WebsiteDetails = () => (
<div>
<Head>
      <title>Website Details</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css' />
    </Head>
    <Nav />

<h1>The start of something great!</h1>
<br></br>
<div className = "youtubeEmbed">
    <p>A key part of any software engineer or any engineer for that matter is showing the side projects and 
        passions to others. A common way to explain this is through a website. This is that website and this
        is the details on how this was made. Below is the Youtube playlist of some to the programming videos for this 
        website as well as some other media concepts/resources used for this website. 
        <br>
        </br>
        For this website I am following an agile approach of creating the minimal viable project first then iterating.
    </p>

    <a href = "https://github.com/ClothAtTheFair/ClothAtTheFair.github.io">Git Repo for this website</a>
</div>
<div className = "resources">
    <h4>Resources for this project</h4>
    <li><a href="https://github.com/zeit/next.js/#using-a-component-that-supports-onclick">Next.JS repo</a></li>
    <li><a href="https://reactjs.org/docs/getting-started.html">React Documentation</a></li>
    <li><a href="https://getbootstrap.com/">Boostrap</a></li>
    <li><a href="https://www.w3schools.com/">w3schools</a></li>
</div>


<style jsx>{`
      .flex-container{
        display: flex;
        flex-direction: row;
        padding: 1em;
      }
      
      .youtubeEmbed{
          padding: 1em;
          
      }

      .resources{
          padding: 1em;
      }
      
    `}</style>

</div>

)
export default WebsiteDetails