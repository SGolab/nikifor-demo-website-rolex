import {Canvas, useThree} from "@react-three/fiber";
import {CameraShake, Html, OrbitControls, Sparkles, SpotLight} from '@react-three/drei'
import RolexTransformed from "./RolexTransformed";
import {useEffect, useRef, useState} from "react";

function Scene({scrollPercentage, dragDistance, interactiveMode, setInteractiveMode}) {

    const getRolexPosition = function () {
        const positions =
            [
                {x: 1, y: -1, z: 0},
                {x: -1, y: -1.75, z: 0},
                {x: 2.5, y: 0, z: 1},
                {x: 0, y: -1, z: 0},
                {x: 0, y: 10, z: 0}
            ]

        let index = Math.floor((scrollPercentage - 0.000001) * 4)
        if (index < 0) {
            index = 0
        }

        const startPosition = positions[index]
        const endPosition = positions[index + 1]
        const relativeCompleteness = (scrollPercentage - index * (1 / (positions.length - 1))) * (positions.length - 1) //should be between 0 and 1

        return [
            getCurrentValue(startPosition.x, endPosition.x, relativeCompleteness),
            getCurrentValue(startPosition.y, endPosition.y, relativeCompleteness),
            getCurrentValue(startPosition.z, endPosition.z, relativeCompleteness)
        ]
    }

    const getRolexRotation = function () {

        const rotations =
            [
                {x: 0, y: (-Math.PI / 2), z: 0},
                {x: 0, y: (-Math.PI / 3), z: 0},
                {x: 0, y: 0, z: Math.PI / 2},
                {x: 0, y: (-Math.PI / 2), z: 0},
                {x: 0, y: (-Math.PI / 2), z: 0}
            ]

        let index = Math.floor((scrollPercentage - 0.000001) * 4)
        if (index < 0) {
            index = 0
        }

        const startRotation = rotations[index]
        const endRotation = rotations[index + 1]
        const relativeCompleteness = (scrollPercentage - index * (1 / (rotations.length - 1))) * (rotations.length - 1) //should be between 0 and 1

        return [
            getCurrentValue(startRotation.x, endRotation.x, relativeCompleteness),
            getCurrentValue(startRotation.y, endRotation.y, relativeCompleteness),
            getCurrentValue(startRotation.z, endRotation.z, relativeCompleteness)
        ]
    }

    const getCurrentValue = function (startValue, endValue, relativeCompleteness) {
        return startValue + (endValue - startValue) * relativeCompleteness;
    }


    const getRolexScale = function () {
        const scales = [
            0.5,
            .7,
            1.2,
            0.4,
            0.4
        ]

        let index = Math.floor((scrollPercentage - 0.000001) * 4)
        if (index < 0) {
            index = 0
        }

        const startScale = scales[index]
        const endScale = scales[index + 1]
        const relativeCompleteness = (scrollPercentage - index * (1 / (scales.length - 1))) * (scales.length - 1) //should be between 0 and 1

        // return startRotation + scrollPercentage * 2 * Math.PI
        return startScale + (endScale - startScale) * relativeCompleteness
    }

    const controlsRef = useRef(null)

    useEffect(() => {
        if (!controlsRef.current) return;

        if (interactiveMode) {
            controlsRef.current.enabled = true;
        } else {
            controlsRef.current.enabled = false;
        }

        const camera = controlsRef.current.object;
        camera.rotation.set(0, 0, 0)
        camera.position.set(0, 0, 3)
        camera.zoom = 1

    }, [interactiveMode])

    return (
        <Canvas shadows camera={{position: [0, 0, 3]}} style={{zIndex: (interactiveMode ? '100' : '0')}}>
            <color attach="background" args={['#050203']}/>

            <pointLight
                position={[-2, 10, 3]}
            />

            <ambientLight/>

            <OrbitControls ref={controlsRef} makeDefault enablePan={false} dampingFactor={0.5} zoomSpeed={0.5} maxZoom={1}/>

            <RolexTransformed
                position={getRolexPosition()}
                scale={getRolexScale()}
                rotation={getRolexRotation()}/>

            {/*{interactiveMode &&*/}
                <Sparkles
                    scale={15}
                    amount={100}
                    position={[0, 0, -2]}
                    size={2}
                    color={'#f54029'}/>
            {/*}*/}
        </Canvas>
    )
}

export default Scene;
