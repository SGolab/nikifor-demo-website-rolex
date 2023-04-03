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
                                       sectionRefList,
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
                <SectionPoints refs={sectionRefList}
                               currentSectionIndex={sectionIndex}/>
            }

            <Sections
                enableScroll={enableScroll}
                setScrollPercentage={setScrollPercentage}
                interactiveMode={interactiveMode}
                setInteractiveMode={setInteractiveMode}
                sectionRefList={sectionRefList}
            />
        </>

    )
}
