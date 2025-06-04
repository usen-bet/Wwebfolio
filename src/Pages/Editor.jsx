import React from 'react'
import Navbar from "../Components/Navbar"
import "../Pages/Style/Editor.scss"
import SideScroller from '../Components/SideScroller'

function Editor() {
  return (
    <div className='editor1'>
      <Navbar/>
        <div className="videocontainers">
        </div>
        <SideScroller />
    </div>
  )
}

export default Editor
