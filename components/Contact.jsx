import React, { useRef } from 'react';
import styles from "../styles/Contact.module.css";
import emailjs from '@emailjs/browser';
import Circle from "../components/Circle.jsx"

const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_kzevh8b', 'template_3xs7hxk', form.current, 'user_GU4yWhpVOgKMbmDyugtR6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("Email sent successfully!")
    }
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#04293A" left="-40vh" top="-20vh"/>
            <Circle backgroundColor="#F58840" right="-30vh" bottom="-60vh"/>
            <h1 className={styles.title}>SEND A MESSAGE</h1>
            <form ref={form} className={styles.form} onSubmit={sendEmail}>
                <input className={styles.inputS} placeholder="Username" type="text" name="name"/>
                <input className={styles.inputL} placeholder="Email" type="email" name="email"/>
                <input className={styles.inputL} placeholder="Phone" type="tel" name="phone"/>
                <input className={styles.inputL} placeholder="Subject" type="text" name="subject"/>
                <textarea className={styles.textarea} placeholder="Message" row={6} name="message"/>
                <button className={styles.button} type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact
