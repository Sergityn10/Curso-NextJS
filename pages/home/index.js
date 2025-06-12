import React from 'react'
import style from "./style.module.css"
import AppLayout from "Components/AppLayout/AppLayout";
import { useEffect,useState } from 'react';
import Avatar from '../../Components/Avatar';
import Devit from '../../Components/Devit';
import useUser from '../../hooks/useUser';
import { fetchLastestSergits } from '../../firebase/client';
export default function HomePage() {
    const [timeline, setTimeline] = useState([]);
    const user = useUser();
  useEffect(() => {
    // Simulate fetching data from an API
    user && fetchLastestSergits()
      .then((data) => {
        setTimeline(data);
      })
      .catch((error) => {
        console.error("Error fetching timeline data:", error);
      });
  }, [user]);
  return (
    <>
        <AppLayout>
            <header className={style.containerHeader}>
                <h1>Inicio</h1>
            </header>
            <section className={style.containerMain}>
                {timeline.map((sergit) => {
                    return(
                    <Devit avatar={sergit.avatar}
                        username={sergit.username}
                        message={sergit.message}
                        id={sergit.id}
                        userId={sergit.uid}
                        createdAt={sergit.createdAt}
                        key={sergit.id}
                        />
                    )
                })}
            </section>
        
            <nav className={style.containerNavegacion}>
                <h2>Hola</h2>
            </nav>
            
        </AppLayout>

    </>
  )
}
