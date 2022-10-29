import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout'

function PrivateRepo() {
   const navigate = useNavigate()
  return (

      <div className="container mt-5">
         <h3 className="portfolio-title">Private Repository</h3>
         <p className="portfolio-description">This is a private repository. Please contact me for access.</p>
         <button className="btn btn-primary" onClick={()=>navigate(-1)}>Back</button>
      </div>
 
  )
}

export default PrivateRepo