import Service from "../components/Service"
import { data } from '../data'

export default function album({service}){
    return(
        <>
            <Service services={service}/>
        </>
    )
}

export const getStaticProps = async () => {
    // const res = await fetch("http://localhost:3000/data")
    // res.status(200).json()
    const service = data
    return {
      props: {
        service
      }
    }
  }
