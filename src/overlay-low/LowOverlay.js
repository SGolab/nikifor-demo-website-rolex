import HoverPoints from "./HoverPoints";
import SectionPoints from "./SectionPoints";
import Sections from "./Sections";

export default function LowOverlay({
                                       scrollPercentage,
                                       setScrollPercentage,
                                       interactiveMode,
                                       setInteractiveMode,
                                       sectionIndex,
                                       section1,
                                       section2,
                                       section3,
                                       section4,
                                       section5
                                   }) {
    return (
        <>
            <HoverPoints scrollPercentage={scrollPercentage}/>

            <SectionPoints refs={[section1, section2, section3, section4, section5]}
                           currentSectionIndex={sectionIndex}/>

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
        </>

    )
}
