import React from 'react'
import Avatar from '../Avatar'
import style from "pages/home/style.module.css"
import useTimeAgo from '../../hooks/useTimeAgo'
export default function Devit({avatar, 
username, message, id, userId, createdAt}) {
  const timeago = useTimeAgo(createdAt)
  return (
    <article key={id} className={style.containerArticle}>
    <div>
    
        <Avatar src={avatar} alt={username} text={""} withText={false}/>
    </div>
        <section>
        <header>
            <strong>{username}</strong>
            <span> . </span>
          <date>{timeago}</date>
        </header>
            <p>{message}</p>
        </section>
                    
    </article>
  )
}
