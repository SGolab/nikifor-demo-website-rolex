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

    const [underlayTopic, setUnderlayTopicActual] = useState('');

    const setUnderlayTopic = function (topic) { //forces react to run useEffect hooks dependent on underlayTopic state even when it is set to the same value
        if (underlayTopic.endsWith(' ')) {
            setUnderlayTopicActual(topic)
        } else {
            setUnderlayTopicActual(topic + ' ')
        }
    }

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

    const [sectionRefList, setSectionRefList] = useState([section1, section2, section3, section4, section5])

    const [detailPointPositions, setDetailPointPositions] = useState([])

    const [isIntro, setIsIntro] = useState(true)

    return (
        <Suspense fallback={<LoadingScreen/>}>

            <div className={styles.mainContainer}>

                <Underlay topicName={underlayTopic} sectionIndex={sectionIndex} setTransformX={setTransformX}/>
                <HighOverlay
                    underLayTopic={underlayTopic}
                    setUnderlayTopic={setUnderlayTopic}
                />

                <TransformableByX transformX={transformX}>

                    <Scene
                        scrollPercentage={scrollPercentage}
                        interactiveMode={interactiveMode}
                        setInteractiveMode={setInteractiveMode}
                        setDetailPointPositions={setDetailPointPositions}
                        setUnderlayTopic={setUnderlayTopic}
                        setIsIntro={setIsIntro}
                    />

                    <LowOverlay
                        enableScroll={transformX === 0 && !interactiveMode && !isIntro}
                        scrollPercentage={scrollPercentage}
                        setScrollPercentage={setScrollPercentage}
                        interactiveMode={interactiveMode}
                        setInteractiveMode={setInteractiveMode}
                        sectionIndex={sectionIndex}
                        sectionRefList={sectionRefList}
                        setUnderlayTopic={setUnderlayTopic}
                        detailPointPositions={detailPointPositions}
                        // isIntro={isIntro}
                    />

                </TransformableByX>
            </div>
        </Suspense>
    );
}

export default App;
