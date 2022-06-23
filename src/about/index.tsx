import React from 'react'
import {
  Link
} from "react-router-dom";
import logoWeb from '../assets/images/logo.jpg'

export default function About() {
  return (
    <div className='container'>
      <img src={logoWeb} />
      <Link to="/">Home</Link>

      About
    </div>
  )
}
