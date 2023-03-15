import React from 'react'
import {
  Link
} from "react-router-dom";
import logoWeb from '../assets/images/logo.jpg'

export default function About() {
  return (
    <div className='container'>
      <Link to="/">Home</Link>

      <h1>About page</h1>
      <img src={logoWeb} />
    </div>
  )
}
