import styles from "../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link"
import { Phone, Instagram, LocationOn } from "@material-ui/icons"

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return(
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>Mavic art</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" passHref>
                        <span className={styles.linkText}>GET IN TOUCH <Image alt="" src="/img/link.png" width="40px" height="40px"/></span>
                        {/* <span className={styles.linkText}>GET IN TOUCH <Image alt="" src={process.env.NEXT_PUBLIC_URL + "/img/link.png"} width="40px" height="40px"/></span> */}
                        
                    </Link>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    <LocationOn /> Lagos, Nigeria
                </div>
                <div className={styles.cardItemz}>
                    <Phone /> <a href="tel:+234 810 864 6033">+234 810 864 6033</a>
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    FOLLOW US <br /> <Instagram /> <a style={{color: "purple"}} href="https://www.instagram.com/mavic_art/" target="_blank" rel="noreferrer">mavic_art</a>
                </div>
                <div className={styles.cardItem}>
                    &copy; {getYear()} mavic art, <br /> ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer