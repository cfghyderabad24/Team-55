import React from 'react'
import prof from './images/prof.jpeg'
import User from './User.js'

function Users() {
    let userl=[
        {
            id:1,
            name:"ram",
            email:"1@gmail.com"
        },
        {
            id:2,
            name:"ramu",
            email:"2@gmail.com"
        },
        {
            id:3,
            name:"rama",
            email:"3@gmail.com"
        }
    ]
  return (
    <div className='cards m-lg-5 d-flex justify-content-between'>
        <User pic={prof} userdata={userl[0]}/>
        {/* <img src={prof} alt="" /> */}
        <User pic={prof} userdata={userl[1]}/>
        <User pic={prof} userdata={userl[2]}/>
    </div>
  )
}

export default Users