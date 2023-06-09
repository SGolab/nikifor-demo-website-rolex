import styles from "./Underlay.module.css";
import {useEffect} from "react";
import useIsMobile from "../hooks/useIsMobile";

export default function Underlay({topicName, setTransformX}) {

    const isMobile = useIsMobile()
    const OFFSET = isMobile ? -75 : -30 //how much space in percents underlay take

    useEffect(() => {
        setTransformX(topicName.trim() ? OFFSET : 0)
    }, [topicName])

    return (
        <div className={styles.underlay}>

            <div className={styles.exitBtn} onClick={() => {
                setTransformX(0)
            }}>
                <img src={'./icons/x-icon.png'} alt={'exit'}/>
            </div>

            {topicName.trim() === 'bezel' &&
                <div className={styles.section1ContentContainer}>
                    <img src={'./photos/rolex-bezel.png'}/>

                    <h1>Cerachrom bezel insert</h1>

                    <p>With its bidirectional rotatable bezel and Cerachrom insert in matt black ceramic with raised
                        and polished numerals and graduations, this new version remains faithful to the aesthetics
                        of the original model, unveiled in 2019.</p>
                </div>
            }
            {topicName.trim() === 'latch' &&
                <div className={styles.section1ContentContainer}>
                    <img src={'./photos/rolex-latch.png'}/>

                    <h1>Latch</h1>

                    <p>With its bidirectional rotatable bezel and Cerachrom insert in matt black ceramic with raised
                        and polished numerals and graduations, this new version remains faithful to the aesthetics
                        of the original model, unveiled in 2019.</p>
                </div>
            }
            {topicName.trim() === 'crown' &&
                <div className={styles.section1ContentContainer}>
                    <img src={'./photos/rolex-crown.png'}/>

                    <h1>Tension Head</h1>

                    <p>With its bidirectional rotatable bezel and Cerachrom insert in matt black ceramic with raised
                        and polished numerals and graduations, this new version remains faithful to the aesthetics
                        of the original model, unveiled in 2019.</p>
                </div>
            }
            {topicName.trim() === 'buy' &&
                <div className={styles.section1ContentContainer}>
                    <div className={styles.menuList}>
                        <div>Buy</div>
                        <div>Buy</div>
                        <div>Buy</div>
                        <div>Buy</div>
                        <div>Buy</div>

                    </div>
                </div>
            }
            {topicName.trim() === 'menu' &&
                <div className={styles.section1ContentContainer}>
                    <div className={styles.menuList}>
                        <div>Rolex Watches</div>
                        <div>New Watches 2023</div>
                        <div>WatchMaking</div>
                        <div>Rolex and Sports</div>
                        <div>Buying a Rolex</div>
                    </div>
                </div>
            }


        </div>
    );
}
