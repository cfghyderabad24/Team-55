import React from 'react'

function User(props) {
  return (
    <div>
        <div className="card ">
            <img src={props.pic} alt="" srcset="" />
            <div className="card-body bg-body-secondary text-center">
            <p className="lead">{props.userdata.id} {props.userdata.name}</p>
            </div>
        </div>
    </div>
  )
}

export default User