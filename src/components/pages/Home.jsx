import React from 'react'
import { Sidebar } from '../Sidebar'
import Chat from '../Chat'
function Home() {
  return (
   <div className="home">
       <div className="container">
        <Sidebar />
        <Chat />
       </div>
   </div>
  )
}

export default Home