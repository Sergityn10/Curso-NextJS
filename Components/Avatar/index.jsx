import React from 'react'
import style from "./style.module.css"
export default function Avatar({alt, src,text, withText}) {
  return (
    <div className={style.avatarContainer}>
        <img className={style.avatar} alt={alt} src={src} title={alt}/>
       {withText &&  <strong>{text||alt} </strong>}
    </div>
  )
}
