import styles from './HoverPoints.module.css'

export default function HoverPoints({scrollPercentage}) {

    return (
        <>
            {(scrollPercentage > 0.245 && scrollPercentage < 0.255) &&
                <div className={styles.hoverPoint}>
                    <div className={styles.textDialog}>

                        <h1>Cerachrom bezel insert</h1>

                        <div className={styles.redLine}></div>

                        <p>With its bidirectional rotatable bezel and Cerachrom insert in matt black ceramic with raised
                            and polished numerals and graduations, this new version remains faithful to the aesthetics
                            of the original model, unveiled in 2019.</p>
                    </div>
                </div>
            }
        </>
    )
}
