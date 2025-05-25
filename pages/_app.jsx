import React, { Component } from 'react'

//UNA FORMA DE ESTILAR NUESTRA PAGINA CON ESTILOS GLOBALES. 
//NO RECOMENDADA YA QUE SE DEBE DE VOLVER A DESPLEGAR CADA VEZ QUE SE REALIZA UN CAMBIO.
export default function App({Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}
