import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import RolexTransformed from "./objects/RolexTransformed";

export default function RolexDisplay({scrollPercentage, interactiveMode, setDetailPointPositions, setUnderlayTopic}) {

    useFrame(state => { //makes sure the camera returns to initial position when interactive mode turns off
        if (!interactiveMode) {
            state.camera.position.lerp(new THREE.Vector3(0, 0, 3), 0.2)
            state.camera.updateProjectionMatrix()
        }

        return null
    })

    const getRolexPosition = function () {
        const positions =
            [
                {x: 1, y: -1.7, z: 0},
                {x: -1, y: -1.75, z: 0},
                {x: .75, y: -2, z: 0},
                {x: 0, y: -1, z: 0},
                {x: 0, y: 6, z: 0}
            ]

        let index = Math.floor((scrollPercentage - 0.001) * 4)
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
                {x: 0, y: (-Math.PI / 1.7), z: 0},
                {x: 0, y: (-Math.PI / 3), z: 0},
                {x: 0, y: (-Math.PI * 0.87), z: -.3},
                {x: 0, y: (-Math.PI / 2), z: 0},
                {x: 0, y: (-Math.PI / 2), z: 0}
            ]

        let index = Math.floor((scrollPercentage - 0.001) * 4)
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
            0.7,
            .7,
            .9,
            0.4,
            0.4
        ]

        let index = Math.floor((scrollPercentage - 0.001) * 4)
        if (index < 0) {
            index = 0
        }

        const startScale = scales[index]
        const endScale = scales[index + 1]
        const relativeCompleteness = (scrollPercentage - index * (1 / (scales.length - 1))) * (scales.length - 1) //should be between 0 and 1

        return startScale + (endScale - startScale) * relativeCompleteness
    }

    return (
        <RolexTransformed
            position={getRolexPosition()}
            scale={getRolexScale()}
            rotation={getRolexRotation()}
            interactiveMode={interactiveMode}
            scrollPercentage={scrollPercentage}
            setDetailPointPositions={setDetailPointPositions}
            setUnderlayTopic={setUnderlayTopic}
        />
    )
}
