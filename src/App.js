import styles from './App.module.css';
import Section from "./Section";
import {useEffect, useRef, useState, Suspense} from "react";
import SectionPoints from "./SectionPoints";
import Scene from "./Scene";
import LoadingScreen from "./LoadingScreen";
import Sections from "./Sections";

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

    return (
        <Suspense fallback={<LoadingScreen/>}>

            <div className={styles.mainContainer}>

                <div className={styles.topOverlay}>
                    <div className={styles.btnContainer}>
                        <div className={styles.btn}>
                            <img src={'./icons/buy-btn.png'} alt={'buy-btn'}/>
                        </div>
                        <div className={styles.btn}>
                            <img src={'./icons/menu-btn.png'} alt={'menu-btn'}/>
                        </div>
                    </div>
                </div>

                <SectionPoints refs={[section1, section2, section3, section4, section5]}/>

                <div className={styles.sceneContainer}>
                    <Scene
                        scrollPercentage={scrollPercentage}
                        interactiveMode={interactiveMode}
                        setInteractiveMode={setInteractiveMode}
                    />
                </div>

                <Sections
                    setScrollPercentage={setScrollPercentage}
                    interactiveMode={interactiveMode}
                    setInteractiveMode={setInteractiveMode}
                    section1={section1}
                    section2={section2}
                    section3={section3}
                    section4={section4}
                    section5={section5}
                />

            </div>
        </Suspense>

    );
}

export default App;
