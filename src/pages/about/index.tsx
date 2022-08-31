import React from 'react'
import {
  Link
} from "react-router-dom";
import logoWeb from '../../assets/images/logo.jpg'
import { useGetUserByNameQuery } from '../../services/user'

export default function About() {
  const { data, error, isLoading } = useGetUserByNameQuery('fujix')

  const renderUserData = (data: any) => {
    let render = []
    
    if (error) {
      if ("status" in error)
        return (<p>ERROR: {JSON.stringify(error.status)}</p>)
    }
    
    if (data) {
      for (const key in data) {
        render.push(
          <p key={key}>{key} : {data[key]}</p>
        )
      }
    }

    return isLoading ? (<>Loading...</>) : (render)
  }

  return (
    <div className='container'>
      <>
        <img src={logoWeb} />
        <Link to="/">Home</Link>
        <h1>About</h1>

        {
          renderUserData(data)
        }
      </>
    </div>
  )
}

