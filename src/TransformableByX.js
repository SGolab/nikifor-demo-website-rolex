import styles from "./App.module.css";

export default function TransformableByX(props) {
    return (
        <div className={styles.moveable} style={{transform: `translateX(${props.transformX}%)`}}>
            {props.children}
        </div>
    )
}
