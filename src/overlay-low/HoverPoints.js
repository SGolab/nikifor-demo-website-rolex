import styles from './HoverPoints.module.css'

export default function HoverPoints({scrollPercentage, setTransformX}) {

    return (
        <>
            {(scrollPercentage > 0.245 && scrollPercentage < 0.255) &&
                <div className={styles.hoverPoint} onClick={() => setTransformX(-30)}/>
            }
        </>
    )
}
