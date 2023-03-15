import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Home Page</h1>
    </div>
  )
}
