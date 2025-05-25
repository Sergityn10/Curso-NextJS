import React from 'react'
import { colors } from '../../styles/theme'

export default function Button({children, onClick}) {
  return (
        <>
            <button onClick={onClick}>
                {children}
            </button>

            <style jsx>{`
                button{
                    background: ${colors.black};
                    border: none;
                    color: ${colors.white};
                    border-radius: 9999;
                    font-weight: 800;
                    display: flex;
                    padding: 8px 24px;
                    cursor: pointer;
                    transition: opacity 0.3s ease;
                }
                button > :global(svg){
                    margin-right: 8px;
                }
                button:hover{
                    opacity: 0.7;
                }
              
            `}</style>
        </>
  )
}
