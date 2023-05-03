import SectionPoints from "./SectionPoints";
import Sections from "./Sections";
import DetailPoints from "./DetailPoints";
import {useState} from "react";

export default function LowOverlay({
                                       enableScroll,
                                       scrollPercentage,
                                       setScrollPercentage,
                                       interactiveMode,
                                       setInteractiveMode,
                                       sectionIndex,
                                       sectionRefList,
                                       setUnderlayTopic,
                                       detailPointPositions,
                                       scrollToSection,
                                       sectionsAmount
                                   }) {

    return (
        <>

            <DetailPoints detailPointPositions={detailPointPositions}
                          scrollPercentage={scrollPercentage}
                          setUnderlayTopic={setUnderlayTopic}
            />

            {enableScroll &&
                <SectionPoints
                               currentSectionIndex={sectionIndex}
                               scrollToSection={scrollToSection}
                               sectionsAmount={sectionsAmount}
                />
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
