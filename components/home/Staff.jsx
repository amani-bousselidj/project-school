import React from 'react'

export default function Staff(props) {
  return (
    <div className='staff col-lg-3 col-md-4 col-sm-6'>
        <div className="staffteamimg">
            <img src={props.profiel} alt="" />
        </div>
        <div className="staff-content">
            <div className="name">{props.name}</div>
            <div className="post">{props.post}</div>
        </div>
    </div>
  )
}
