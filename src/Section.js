import styles from './Section.module.css'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Section(props) {

    const sectionRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current.children,
            props.animation?.fromVars,
            {
                ...props.animation?.toVars,
                scrollTrigger: {
                    scroller: ".gsap-container",
                    trigger: sectionRef.current,
                    start: "top 50%",
                    end: "bottom 10%",
                    toggleActions: "play none restart reverse",
                    // markers: true
                }
            },
        );
    }, [props.animation]);

    return (
        <div className={styles.section} ref={sectionRef}>
            {props.children}
        </div>
    )
}
