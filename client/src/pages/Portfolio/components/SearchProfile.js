import React from 'react'

export const SearchProfile = ({profiles}) => {
  return (
    <div className="CProfile">
    <img src={profiles.profilePic} alt="" className="images" />
    <div><h3>{profiles.nickname}</h3>
    <h5>{profiles.location}</h5>
    <p className="tag" style={{background:'green', color:'white'}}>message</p>
    </div>
  </div>
  )
}
