import {Canvas} from "@react-three/fiber";
import {OrbitControls, Sparkles} from '@react-three/drei'
import styles from "../App.module.css";
import RolexDisplay from "./RolexDisplay";
import NikiforText from "./objects/NikiforText";

function Scene({scrollPercentage, interactiveMode, setDetailPointPositions, setUnderlayTopic}) {

    return (
        <div className={styles.sceneContainer}>
            <Canvas shadows camera={{position: [0, 0, 3]}} style={{zIndex: (interactiveMode ? '100' : '0')}}>
                <color attach="background" args={['#050203']}/>

                {/*<pointLight*/}
                {/*    position={[-2, 10, 3]}*/}
                {/*/>*/}

                <pointLight
                    position={[-2, 5, 5]}
                />

                <pointLight
                    position={[0, 0, 5]}
                />

                <pointLight
                    position={[0, 0, -5]}
                />

                <pointLight
                    position={[-2, 5, 5]}
                />

                {/*<ambientLight/>*/}

                <OrbitControls makeDefault
                               enablePan={false}
                               zoomSpeed={0.5}
                               dampingFactor={0.4}
                               minDistance={1}
                               maxDistance={5}
                />

                <NikiforText position={[0, 0, -5]}/>

                <RolexDisplay
                    scrollPercentage={scrollPercentage}
                    interactiveMode={interactiveMode}
                    setDetailPointPositions={setDetailPointPositions}
                    setUnderlayTopic={setUnderlayTopic}
                />

                <Sparkles
                    scale={15}
                    amount={100}
                    position={[0, 0, -2]}
                    size={1}
                    color={'#E5B906'}/>
            </Canvas>
        </div>
    )
}

export default Scene;
