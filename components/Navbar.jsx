import { useState } from 'react';
import styles from "../styles/Navbar.module.css"
import Link from "next/link"


const Navbar = () => {
    const [open, setOpen] = useState(false)
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
            <div className={styles.hambugger} onClick={() => setOpen(!open)}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
            <ul className={styles.menu} onClick={() => setOpen(false)} style={{right: open ? "0px" : "-50vw"}}>
                <li className={styles.menuItem}>
                    <Link href="/">HOME</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/album">ALBUM</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar