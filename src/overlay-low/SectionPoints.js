import styles from './SectionPoints.module.css'
import {v4 as uuidv4} from 'uuid';

export default function SectionPoints({refs, currentSectionIndex}) {

    function scrollTo(section) {
        section.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className={styles.sectionPoints}>
            {refs.map(ref =>
                <div
                    key={uuidv4()}
                    className={styles.point}
                    style={{transform: `scale(${refs.indexOf(ref) === currentSectionIndex ? 1.2 : 1})`}}
                    onClick={() => scrollTo(ref)}/>)
            }
        </div>
    )
}
