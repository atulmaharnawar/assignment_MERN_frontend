import React from 'react'
import Login from './Login'
import UserHome from './UserHome'


const Home = () => {
  return (
    <div>
      {!localStorage.getItem("token") ? (<Login />) : (<UserHome />)}
    </div>
  )
}

export default Home