import styles from "./HighOverlay.module.css";

export default function HighOverlay({transformX, setTransformX}) {

    const TRANSFORM_VALUE = -30

    const handleToggleTransform = function() {
        if (transformX === TRANSFORM_VALUE) {
            setTransformX(0)
        } else {
            setTransformX(TRANSFORM_VALUE)
        }
    }

    return (
        <div className={styles.highOverlay}>
            <div className={styles.btnContainer}>
                <div className={styles.btn}>
                    <img src={'./icons/buy-btn.png'} alt={'buy-btn'}/>
                </div>
                <div className={styles.btn} onClick={handleToggleTransform}>
                    <img src={'./icons/menu-btn.png'} alt={'menu-btn'}/>
                </div>
            </div>
        </div>
    )
}
