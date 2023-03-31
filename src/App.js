import styles from './App.module.css';
import {Suspense, useEffect, useRef, useState} from "react";
import Scene from "./scene/Scene";
import LoadingScreen from "./LoadingScreen";
import HighOverlay from "./overlay-high/HighOverlay";
import Underlay from "./underlay/Underlay";
import TransformableByX from "./TransformableByX";
import LowOverlay from "./overlay-low/LowOverlay";

function App() {

    const [transformX, setTransformX] = useState(0);
    const [interactiveMode, setInteractiveMode] = useState(false);

    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [sectionIndex, setSectionIndex] = useState(0)

    const NUMBER_OF_SECTIONS = 5;

    useEffect(() => {
        let index = Math.floor((scrollPercentage) * NUMBER_OF_SECTIONS)
        index = (index >= NUMBER_OF_SECTIONS ? NUMBER_OF_SECTIONS - 1 : index);

        setSectionIndex(index)

    }, [scrollPercentage])

    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    const section5 = useRef();

    return (
        <Suspense fallback={<LoadingScreen/>}>

            <div className={styles.mainContainer}>

                <Underlay sectionIndex={sectionIndex} setTransformX={setTransformX}/>
                <HighOverlay transformX={transformX} setTransformX={setTransformX}/>

                <TransformableByX transformX={transformX}>

                    <Scene
                        scrollPercentage={scrollPercentage}
                        interactiveMode={interactiveMode}
                        setInteractiveMode={setInteractiveMode}
                    />

                    <LowOverlay
                        enableScroll={transformX === 0 && !interactiveMode}
                        scrollPercentage={scrollPercentage}
                        setScrollPercentage={setScrollPercentage}
                        interactiveMode={interactiveMode}
                        setInteractiveMode={setInteractiveMode}
                        sectionIndex={sectionIndex}
                        section1={section1}
                        section2={section2}
                        section3={section3}
                        section4={section4}
                        section5={section5}
                        setTransformX={setTransformX}
                    />

                </TransformableByX>
            </div>
        </Suspense>
    );
}

export default App;
