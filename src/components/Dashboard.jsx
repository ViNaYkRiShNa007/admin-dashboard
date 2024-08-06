import React from 'react'
import Navbar from './Navbar'

const Dashboard = ({sideBarToggle,setSideBarToggle}) => {
  return (
    <div className='w-full'>
      <Navbar sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle}/>
    </div>
  )
}

export default Dashboard