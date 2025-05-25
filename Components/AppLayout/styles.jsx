import css from "styled-jsx/css"
import { breakpoints, fonts, colors } from "../../styles/theme";
import { addOpacityToHexColor } from '../../styles/utils'

const backgroundColor = addOpacityToHexColor(colors.primary, 0.8)
console.log(breakpoints.mobile)
const breakpointMobile = breakpoints.mobile
export const globalStyles = css.global`
          html, body {
            background-image: 
              radial-gradient(${backgroundColor} 1px,1px,#0000),
              radial-gradient(${backgroundColor} 1px,1px,#0000);
            background-position:0 0, 25px 25px;
            background-size: 50px 50px;
            margin: 0;
            padding: 0;
            font-family: ${fonts.base};
          }
            * {
                box-sizing: border-box;
            }
            a {
                text-decoration: none;
                color: inherit;
            }
            h1{
              color: red;
            }

        `

export const normalStyle= css`
      div{
          display: grid;
          height: 100vh;
          place-items: center;
        }
        main {
          background-color:#fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          height: 100%;
          
        }
         @media (min-width: 500px ) {
          main {
            width: ${breakpoints.mobile};
            height: 90vh;

          }
        }  
`
