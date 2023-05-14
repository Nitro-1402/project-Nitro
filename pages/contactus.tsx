import styles from '../styles/contactUs.module.css';
import react from 'react';
import Footer from "@/component/Footer";
import Header from "@/component/header";
export default function contactUs(){
    
    return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.call}>
            <h1>تماس با ما</h1>
        </div>
        <div className={styles.sagest}>
            <h4>پیشنهادات خود را با ما در میان بگذارید!</h4>
        </div>
        <div className={styles.inputContainer}>
            <div className={styles.information}>

                <div className={styles.name}>
                    <label className={styles.label}> </label>
                    <input className={styles.input} type="text" required placeholder='نام شما'/>
                </div>
                <div className={styles.styledInput}>
                    <label className={styles.label}> </label>
                    <input className={styles.input} type="text" required placeholder='پست الکترونیک'/>
                </div>
                <div className={styles.styledInput}>
                    <label className={styles.label}> </label>
                    <input className={styles.input} type="text" required placeholder='تلفن تماس'/>
                </div>
           </div>
            <div className={styles.textInput}>
                <textarea className={styles.text} required placeholder='متن پیام'/>
            </div>
        </div>
        <div className={styles.submitBtn} >ارسال پیام</div>
        <br/><br/>
    </div>
)
}

