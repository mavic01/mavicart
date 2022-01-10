import styles from "../styles/Testimonials.module.css"
import Circle from "./Circle"
import Image from "next/image"
import { users } from "../data.js"

const Testimonals = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="green" top="-70vh" left="0" right="0"/>
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.wrapper}>
                {users.map(user => (
                    <div key={user.id} className={styles.card}>
                        <p className={styles.comment}>{user.comment}</p>
                        <div className={styles.person}>
                            <Image className={styles.avatar} alt="art" src={`/art/${user.avatar}`} width="45" height="45" objectFit="cover"/>
                            <div className={styles.info}>
                                <span className={styles.username}>{user.name}</span>
                                <span className={styles.jobTitle}>{user.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonals