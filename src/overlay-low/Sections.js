import styles from "./LowOverlay.module.css";
import Section from "./Section";
import {useEffect, useState} from "react";

export default function Sections({
                                     enableScroll,
                                     setScrollPercentage,
                                     interactiveMode,
                                     setInteractiveMode,
                                     section1,
                                     section2,
                                     section3,
                                     section4,
                                     section5
                                 }) {

    const [animations, setAnimations] = useState({})

    useEffect(() => {
        fetch('./animations.json')
            .then((response) => response.json())
            .then((json) => setAnimations(json));
    }, [])

    const handleOnScroll = function (e) {
        setScrollPercentage(e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))
    }

    return (
        <div
            className={`gsap-container ${styles.sectionsContainer}`}
            style={{overflow: (enableScroll ? 'auto' : 'hidden')}}
            onScroll={handleOnScroll}
        >

            <div ref={section1}>
                <Section animation={animations.appearAndColor}>
                    <div className={styles.section1TextContainer}>
                        <small>Introducing new generation of the</small>
                        <h1>Oyster Perpetual</h1>
                        <p>The sunray finish creates delicate light reflections on many dials in the Oyster
                            Perpetual collection. It is obtained using masterful brushing techniques that create
                            grooves running outwards from the centre of the dial.</p>
                    </div>
                </Section>
            </div>

            <div ref={section2}>
                <Section animation={animations.appearAndColor}>
                    <div className={styles.section2TextContainer}>
                        <small>The Oyster bracelet</small>

                        <h1>Alchemy of form and function</h1>
                        <p>The Oyster bracelet is a perfect alchemy of form and function, aesthetics and
                            technology.</p>
                        <p>First introduced in the late 1930s, this particularly robust and comfortable metal
                            bracelet with its broad, flat three-piece links remains the most universal bracelet
                            in
                            the Oyster collection. For the Oyster Perpetual models the Oyster bracelet is fitted
                            with an Oysterclasp.</p>
                    </div>
                </Section>
            </div>

            <div ref={section3}>
                <Section animation={animations.appearAndColor}>
                    <div className={styles.section3ContentContainer}>
                        <div className={styles.gridTile}>
                            <h3>Movement</h3>
                            <p>Perpetual, mechanical, self-winding</p>
                        </div>
                        <div className={styles.gridTile}>
                            <h3>Functions</h3>
                            <p>Centre hour, minute and seconds hands. Stop-seconds for precise time setting</p>
                        </div>
                        <div className={styles.gridTile}>
                            <h3>Winding</h3>
                            <p>Bidirectional self-winding via Perpetual rotor</p>
                        </div>
                        <div className={styles.gridTile}>
                            <h3>Oscillator</h3>
                            <p>Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock
                                absorbers</p>
                        </div>
                        <div className={styles.gridTile}>
                            <h3>Precision</h3>
                            <p>-2/+2 sec/day, after casing</p>
                        </div>
                    </div>
                </Section>
            </div>

            <div ref={section4}>
                <Section animation={animations.appear}>
                    <div className={styles.section4ContentContainer}>
                        <div
                            className={styles.openPreviewBtn}
                            // onClick={() => setIsDragEnabled(prevState => !prevState)}
                            onClick={() => setInteractiveMode(true)}
                        >
                            Interactive mode.
                        </div>

                        {interactiveMode &&
                            <>
                                <div className={styles.textContainer} style={{zIndex: 101}}>
                                    Drag to rotate.
                                </div>

                                <div className={styles.openPreviewBtn}
                                     style={{zIndex: 101}}
                                     onClick={() => setInteractiveMode(false)}>
                                    Exit interactive mode
                                </div>
                            </>
                        }
                    </div>
                </Section>
            </div>

            <div ref={section5}>
                <Section animation={animations.appear}>
                    <div className={styles.section5ContentContainer}>
                        <img src={'./rolex-photo-1.jpg'} alt={'rolex-photo-1'}/>
                        <img src={'/rolex-photo-2.jpg'} alt={'rolex-photo-2'}/>
                    </div>
                </Section>
            </div>
        </div>
    )
}
