import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

const PostLink = props => (
  
  <Link href={`/post?title=${props.title}`}>
      <a className="btn btn-primary">{props.title}</a>
  </Link>
);


const Projects = () => (

<div>
<Head>
      <title>Projects</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css' />
      <link href="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"/>
      <link rel='js' href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"/>
    </Head>
    <Nav />

<h3 className="header">Some cool projects that I want to work on and showcase!</h3>
<h5 className="header">For 2020, I plan to do 6 projects in 12 months and below are the projected projects so far with projected timelines <br></br></h5>

 {/* Keep 3 to a row */}
    <div className="flex-container">
      <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Personal Website</h5>
          <p className="card-text">If you are reading this then you are seeing the new website I created.
          This will go into more detail</p>
          <a href="websiteDetails" className="btn btn-primary">Website!</a>
        </div>
      </div>


      <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">YouTube Channel and Twitch</h5>
          <p className="card-text">Project details on the process of me setting up my Youtube channel for coding and twitch for gaming!</p>
          <PostLink title = "Channels!"/>
        </div>
      </div>

      <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Object Detection Dashcam</h5>
          <p className="card-text">More information to come in March!</p>
          <PostLink title = "Dashcam!"/>
        </div>
      </div>      

    </div>
{/* 
    <div className="flex-container">

    <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Adult for me bot</h5>
          <p className="card-text">A framework scheduler. The project will start in May 2020!</p>
          <PostLink title = "Scheduler bot!"/>
        </div>
      </div>

    <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Analytics Dashboard</h5>
          <p className="card-text">More information to come in July 2020!</p>
          <PostLink title = "Analytics!"/>
        </div>
      </div>

    
      <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Stock Bot</h5>
          <p className="card-text">A python coded stock trading bot but with a bit of NLP. The project starts September! </p>
          <PostLink title = "stocks!"/>
        </div>
      </div>

    </div>
     */}
    

<style jsx>{`
      .header {
        padding-left: 1em;
      }
      .flex-container{
        display: flex;
        flex-direction: row;
        padding: 1em;
      }
      .card {
        width: 30%;
        color: black;
        padding: 1em;
        borderRadius: 4em;
        border: solid;
        overflow: hidden;
        margin: 1em;

      }
      .card-title {
          textAlign: center;
          color: black;
          font-size: large;
      }
      
    `}</style>

</div>

  

)




export default Projects