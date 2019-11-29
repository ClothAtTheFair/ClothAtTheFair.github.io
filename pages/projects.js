import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

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

<h3>Some cool stuff that I will be showing soon!<br></br></h3>

 {/* Keep 3 to a row */}
    <div className="flex-container">
      <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Personal Website</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>


      <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">YouTube Channel and Twitch</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Adult for me bot</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>

    <div className="flex-container">
      <div className="card" >
        <img src="favicon.ico" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">NFL betting bot</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    

<style jsx>{`
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