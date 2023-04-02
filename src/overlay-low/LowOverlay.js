import DetailPoint from "./DetailPoint";
import SectionPoints from "./SectionPoints";
import Sections from "./Sections";
import DetailPoints from "./DetailPoints";

export default function LowOverlay({
                                       enableScroll,
                                       scrollPercentage,
                                       setScrollPercentage,
                                       interactiveMode,
                                       setInteractiveMode,
                                       sectionIndex,
                                       section1,
                                       section2,
                                       section3,
                                       section4,
                                       section5,
                                       setUnderlayTopic,
                                       detailPointPositions
                                   }) {
    return (
        <>

            <DetailPoints detailPointPositions={detailPointPositions}
                          scrollPercentage={scrollPercentage}
                          setUnderlayTopic={setUnderlayTopic}
            />

            {enableScroll &&
                <SectionPoints refs={[section1, section2, section3, section4, section5]}
                               currentSectionIndex={sectionIndex}/>
            }

            <Sections
                enableScroll={enableScroll}
                setScrollPercentage={setScrollPercentage}
                interactiveMode={interactiveMode}
                setInteractiveMode={setInteractiveMode}
                section1={section1}
                section2={section2}
                section3={section3}
                section4={section4}
                section5={section5}
            />
        </>

    )
}
