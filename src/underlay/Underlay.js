import styles from "./Underlay.module.css";

export default function Underlay({sectionIndex, setTransformX}) {
    return (
        <div className={styles.underlay}>
            <div className={styles.exitBtn} onClick={() => setTransformX(0)}>
                <img src={'/icons/x-icon.png'} alt={'exit'}/>
            </div>

            {sectionIndex === 0 &&
                <div>
                    Section index 0
                </div>
            }
            {sectionIndex === 1 &&
                <div className={styles.section1ContentContainer}>
                    <img src={'./photos/rolex-bezel.png'}/>

                    <h1>Cerachrom bezel insert</h1>

                    <div className={styles.redLine}></div>

                    <p>With its bidirectional rotatable bezel and Cerachrom insert in matt black ceramic with raised
                        and polished numerals and graduations, this new version remains faithful to the aesthetics
                        of the original model, unveiled in 2019.</p>
                </div>
            }

        </div>
    );
}
