import styles from "../styles/Service.module.css"
// import Link from "next/link"
import Image from "next/image"


const Service = ({services}) => {
    return (
        <div className={styles.container} id="album">
        <h1 className={styles.title}>I Find Art Facinating</h1>
            {/* <h1 className={styles.title}>Drawing the Human Face Facinates me because Each Face Reveal a Different Emotion</h1> */}
            <div className={styles.services}>
                {services.map(service => (
                    // <Link passHref key={service.id} href={`/products/${service.title}`}>
                        <div key={service.id}  className={styles.service}>
                            <span className={styles.category}>{service.title}</span>
                            <div className={styles.media}>
                                {service.video ? 
                                    // (<video src={`/art/${service.video}`} autoPlay muted loop className={styles.video}/>) : 
                                    // (<Image src={`/art/${service.photo}`} alt="Art Img" width="100%" height="100%" layout="responsive" objectFit="cover"/>)
                                    (<video src={`/art/${service.video}`} autoPlay muted loop className={styles.video}/>) : 
                                    (<Image src={`${process.env.NEXT_PUBLIC_URL}/art/${service.photo}`} alt="Art Img" width="100%" height="100%" layout="responsive" objectFit="cover"/>)
                                }
                            </div>
                        </div>
                    // </Link>
                ))}
            </div>

        </div>
    )
}


export default Service
