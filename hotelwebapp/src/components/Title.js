import React from 'react'

export default function Title({title,position,sty}) {
    return (
        <div className={position}  >
            <h2  className={position}>{title}</h2>
            
            <div/>
        </div>
    )
}