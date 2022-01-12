import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from "../components/Intro"
import Service from "../components/Service"
import Testimonials from "../components/Testimonials"
// import { data } from '../data'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MAVIC ART</title>
        <meta name="description" content="Get your art portrait done" />
        <meta name="keywords" content="art, artist, pencil, gallery, pop art, abstract, art gallery, art supplies, modern art, artwork, fine arts, famous artists" />
        <meta name="author" content="John Doe" />
        {/* <link rel="icon" href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      {/* <Service services={service}/> */}
      <Testimonials />
    </div>
  )
}


// export const getStaticProps = async () => {
//   // const res = await fetch("http://localhost:3000/data")
//   // res.status(200).json()
//   const service = data
//   return {
//     props: {
//       service
//     }
//   }
// }
