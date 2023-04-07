import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import RolexTransformed from "./objects/RolexTransformed";
import {useEffect, useState} from "react";
import {now} from "three/addons/libs/tween.module";

export default function RolexDisplay({scrollPercentage, interactiveMode, setDetailPointPositions, setUnderlayTopic}) {

    useFrame(state => { //makes sure the camera returns to initial position when interactive mode turns off
        if (!interactiveMode) {
            state.camera.position.lerp(new THREE.Vector3(0, 0, 3), 0.2)
            state.camera.updateProjectionMatrix()
        }

        return null
    })

    const [introTime, setIntroTime] = useState(0)

    useEffect(() => {
        setIntroTime(Date.now())
    }, [])

    const getRolexPosition = function () {

        const positions =
            [
                {x: 1, y: -1.7, z: 0},
                {x: -1, y: -1.75, z: 0},
                {x: .75, y: -2, z: 0},
                {x: 0, y: -1, z: 0},
                {x: 0, y: 6, z: 0}
            ]

        //intro
        const duration = 2000
        const elapsedTime = Date.now() - introTime

        if (elapsedTime <= duration) {
            const completeness = elapsedTime / duration
            const easedCompleteness = 1 - (1 - completeness) * (1 - completeness) * (1 - completeness)

            return [
                lerp(-2, positions[0].x, easedCompleteness),
                lerp(2, positions[0].y, easedCompleteness),
                lerp(1, positions[0].z, easedCompleteness),
            ]
        }
        //intro end

        let index = Math.floor((scrollPercentage - 0.001) * 4)
        if (index < 0) {
            index = 0
        }

        const startPosition = positions[index]
        const endPosition = positions[index + 1]
        const relativeCompleteness = (scrollPercentage - index * (1 / (positions.length - 1))) * (positions.length - 1) //should be between 0 and 1

        return [
            lerp(startPosition.x, endPosition.x, relativeCompleteness),
            lerp(startPosition.y, endPosition.y, relativeCompleteness),
            lerp(startPosition.z, endPosition.z, relativeCompleteness)
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

        //intro
        const duration = 2000
        const elapsedTime = Date.now() - introTime

        if (elapsedTime <= duration) {
            const completeness = elapsedTime / duration
            const easedCompleteness = 1 - (1 - completeness) * (1 - completeness) * (1 - completeness)

            return [
                lerp(0, rotations[0].x, easedCompleteness),
                lerp((-Math.PI * 0.87), rotations[0].y, easedCompleteness),
                lerp(-.3, rotations[0].z, easedCompleteness),
            ]
        }
        //intro end

        let index = Math.floor((scrollPercentage - 0.001) * 4)
        if (index < 0) {
            index = 0
        }

        const startRotation = rotations[index]
        const endRotation = rotations[index + 1]
        const relativeCompleteness = (scrollPercentage - index * (1 / (rotations.length - 1))) * (rotations.length - 1) //should be between 0 and 1

        return [
            lerp(startRotation.x, endRotation.x, relativeCompleteness),
            lerp(startRotation.y, endRotation.y, relativeCompleteness),
            lerp(startRotation.z, endRotation.z, relativeCompleteness)
        ]
    }

    const lerp = function (startValue, endValue, relativeCompleteness) {
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
