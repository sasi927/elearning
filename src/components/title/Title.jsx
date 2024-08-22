import React from 'react'
import './Title.css'
export default function Title({title,subtitle}) {
  return (
    <>
    <div className="title">
        <p>{title}</p>
        <h1>{subtitle}</h1>
    </div>
    </>
  )
}
