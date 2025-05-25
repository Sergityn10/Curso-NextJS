import Link from "next/link";
import AppLayout from "../../Components/AppLayout/AppLayout";
export default function Timeline({username}) {
  return (
    <AppLayout>
      <h1>This is the timeline of {username}</h1> 
      <Link href="/"> <a>Go to home</a></Link>
    </AppLayout>
  )
}

Timeline.getInitialProps = async () => {
  
  return {username : "Sergio"}
}