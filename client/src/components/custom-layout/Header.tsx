import React from 'react'
import "../Layout.css"

export const Header = () => {
  return (
    <div className="w-100 h-20 header-bar">
      <div className=" d-flex justify-self-end py-4 mt-3 mr-9">
        <span className='mr-5  '>login</span>{" "}
        <span>signup</span>
      
      </div>
    </div>

  )
}
