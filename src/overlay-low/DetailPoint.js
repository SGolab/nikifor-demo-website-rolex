import styles from './DetailPoint.module.css'

export default function DetailPoint({detailPointPosition, setUnderlayTopic}) {

    return (
        <div className={styles.detailPointHoverArea}
             style={{
                 left: `${detailPointPosition.x}px`,
                 top: `${detailPointPosition.y}px`,
             }}>
            <div
                className={styles.detailPoint}
                onClick={() => {
                    setUnderlayTopic('bezel')
                }}
            />
        </div>
    )
}
