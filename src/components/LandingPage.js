import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

const myStyle = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const LandingPage = () => {
  return (
     <>
      <Helmet>
        <title>Project Management Tool</title>
        <meta name='description' content='Create tasks for new projects here' />
        <style>{'body { background-color: #ddbbfc; }'}</style>
      </Helmet>
      <div style={myStyle}>
      <h1>A PROJECT MANAGEMENT APP FOR EVERYBODY</h1>
      </div>
      <div style={myStyle}>
      <em><p style = {{fontSize: '20px', color: '#5e194e'}}>Interested in new Project ideas ? Create a project task and start coding...</p></em>
      </div>
      <div style={myStyle}>
      <Link className='btn btn-light my-3' to='/project' >
      View Projects here     
      </Link>
      </div>
    </>
  )
}

export default LandingPage
