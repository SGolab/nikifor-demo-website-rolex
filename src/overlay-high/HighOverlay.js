import styles from "./HighOverlay.module.css";

export default function HighOverlay({setUnderlayTopic}) {

    return (
        <div className={styles.highOverlay}>

            <div className={styles.logoContainer}>
                <img src={'./rolex-logo.webp'}/>
                <div className={styles.logoText}>
                    <h1>ROLEX</h1>
                    <h2>POWERED BY NIKIFOR</h2>
                </div>
            </div>

            <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={() => setUnderlayTopic('buy')}>
                    <img src={'./icons/buy-btn.png'} alt={'buy-btn'}/>
                </div>
                <div className={styles.btn} onClick={() => setUnderlayTopic('menu')}>
                    <img src={'./icons/menu-btn.png'} alt={'menu-btn'}/>
                </div>
            </div>
        </div>
    )
}
