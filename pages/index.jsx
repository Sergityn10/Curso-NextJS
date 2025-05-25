import Head from "next/head";
import Link from "next/link";
import AppLayout from "../Components/AppLayout/AppLayout";
import { colors } from "../styles/theme";
import Button from "../Components/Button";
import Github from "../Components/Icons/Github";
export default function Home() {
  return (
    <>
      <AppLayout>
      <section>
        <img src="/cr7.jpeg" alt="Logo" />
        <h1>SERGIDEV</h1>
        <Button>
          <Github fill={"white"} width={24} height={24}/>
          Login with Github
        </Button>
      </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
          height: auto;
          max-width: 600px;
          display: block;
          margin: 0 auto;
          
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1{
          color: ${colors.primary};
          font-weight: 800;
          margin: 0 16px;
          font-size: 2.5rem;
        }
        section {
          place-items: center;
          place-content: center;
          display: grid;


          padding: 20px;
          height: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        a {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }
        a:hover {
          background-color: #005bb5;
        }
      `}</style>
    </>
  );
}