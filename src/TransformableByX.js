import styles from "./App.module.css";

export default function TransformableByX(props) {
    return (
        <div className={styles.transformableByX} style={{transform: `translateX(${props.transformX}%)`}}>
            {props.children}
            <div className={styles.blurRightSide}></div>
        </div>
    )
}
