import styles from './SectionPoints.module.css'

export default function SectionPoints({
                                          currentSectionIndex,
                                          scrollToSection,
                                          sectionsAmount
                                      }) {
    return (
        <div className={styles.sectionPoints}>
            {Array(sectionsAmount).fill(1).map((_, index) => {
                return <div
                    key={index}
                    className={styles.point}
                    style={{transform: `scale(${index === currentSectionIndex ? 1.2 : 1})`}}
                    onClick={() => scrollToSection(index)}
                />
            })}

        </div>
    )
}
