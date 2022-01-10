import styles from "../styles/Navbar.module.css"
import Link from "next/link"


const Navbar = () => {
    return(
        <div className={styles.container}>
            <Link href="/">MAVIC ART</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/">HOME</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/album">ALBUM</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar