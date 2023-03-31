import styles from './App.module.css';
import Section from "./Section";
import {useEffect, useRef, useState, Suspense} from "react";
import SectionPoints from "./SectionPoints";
import Scene from "./Scene";
import LoadingScreen from "./LoadingScreen";

function App() {

    // const [isDragEnabled, setIsDragEnabled] = useState(false);
    const [interactiveMode, setInteractiveMode] = useState(false);

    const [scrollPercentage, setScrollPercentage] = useState(0);
    // const [dragDistance, setDragDistance] = useState({deltaX: 0, deltaY: 0})

    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    const section5 = useRef();

    function scrollTo(section) {
        section.current.scrollIntoView({behavior: "smooth"});
    }

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
        <Suspense fallback={<LoadingScreen/>}>

            <div className={styles.mainContainer}>
                <SectionPoints refs={[section1, section2, section3, section4, section5]} scrollTo={scrollTo}/>

                <div className={styles.sceneContainer}>
                    <Scene
                        scrollPercentage={scrollPercentage}
                        interactiveMode={interactiveMode}
                        setInteractiveMode={setInteractiveMode}
                        // dragDistance={dragDistance}
                    />
                </div>

                <div
                    className={`gsap-container ${styles.sectionsContainer}`}
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
                        <Section animation={animations.appearAndColor}>
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
                        <Section>
                            <div className={styles.section5ContentContainer}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam aspernatur atque cupiditate ducimus ea eaque eum in inventore ipsa magni nostrum obcaecati odit perspiciatis quisquam repellendus ut vel, voluptas?
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        </Suspense>

    );
}

export default App;
