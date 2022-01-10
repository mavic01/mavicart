import styles from "../styles/Intro.module.css"
import Image from "next/image"

const Intro = () => {
    return (
        <div className={styles.container}>
                <div className={styles.card}>
                    <p className={styles.desc}>Create cool artworks for yourself, friends and loved ones.</p>
                    <h1 className={styles.title}>MAVIC ART</h1>
                    {/* <button className={styles.button}>DISCOVER</button> */}
                </div>
        </div>
    )
}

export default Intro
