import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import RolexTransformed from "./objects/RolexTransformed";
import {useEffect, useState} from "react";
import {now} from "three/addons/libs/tween.module";
import useIsMobile from "../hooks/useIsMobile";

export default function RolexDisplay({scrollPercentage, interactiveMode, setDetailPointPositions, setUnderlayTopic}) {

    const isMobile = useIsMobile()

    const mobileSettings = [
        {
            position: {x: .35, y: -2.3, z: 0},
            rotation: {x: -.3, y: (-Math.PI / 1.7), z: 0},
            scale: 0.7
        },
        {
            position: {x: -.3, y: -2.4, z: 0},
            rotation: {x: 0, y: (-Math.PI / 3), z: 0},
            scale: 0.7
        },
        {
            position: {x: .4, y: -1.8, z: 0},
            rotation: {x: 0, y: (-Math.PI * 0.85), z: -.3},
            scale: 0.7
        },
        {
            position: {x: 0, y: -1, z: 0},
            rotation: {x: 0, y: (-Math.PI / 2), z: 0},
            scale: 0.4
        },
        {
            position: {x: 0, y: 6, z: 0},
            rotation: {x: 0, y: (-Math.PI / 2), z: 0},
            scale: 0.4
        },
    ]

    const desktopSettings = [
        {
            position: {x: 1, y: -1.7, z: 0},
            rotation: {x: 0, y: (-Math.PI / 1.7), z: 0},
            scale: 0.7
        },
        {
            position: {x: -1, y: -1.75, z: 0},
            rotation: {x: 0, y: (-Math.PI / 3), z: 0},
            scale: 0.7
        },
        {
            position: {x: .75, y: -2, z: 0},
            rotation: {x: 0, y: (-Math.PI * 0.87), z: -.3},
            scale: 0.9
        },
        {
            position: {x: 0, y: -1, z: 0},
            rotation: {x: 0, y: (-Math.PI / 2), z: 0},
            scale: 0.4
        },
        {
            position: {x: 0, y: 6, z: 0},
            rotation: {x: 0, y: (-Math.PI / 2), z: 0},
            scale: 0.4
        },
    ]


    const rolexSettings = isMobile ? mobileSettings : desktopSettings


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

        //intro
        const duration = 2000
        const elapsedTime = Date.now() - introTime

        if (elapsedTime <= duration) {
            const completeness = elapsedTime / duration
            const easedCompleteness = 1 - (1 - completeness) * (1 - completeness) * (1 - completeness)

            return [
                lerp(-2, rolexSettings[0].position.x, easedCompleteness),
                lerp(2, rolexSettings[0].position.y, easedCompleteness),
                lerp(1, rolexSettings[0].position.z, easedCompleteness),
            ]
        }
        //intro end

        let index = Math.floor((scrollPercentage - 0.001) * 4)
        if (index < 0) {
            index = 0
        }

        const startPosition = rolexSettings[index].position
        const endPosition = rolexSettings[index + 1].position
        const relativeCompleteness = (scrollPercentage - index * (1 / (rolexSettings.length - 1))) * (rolexSettings.length - 1) //should be between 0 and 1

        return [
            lerp(startPosition.x, endPosition.x, relativeCompleteness),
            lerp(startPosition.y, endPosition.y, relativeCompleteness),
            lerp(startPosition.z, endPosition.z, relativeCompleteness)
        ]
    }

    const getRolexRotation = function () {
        //
        // const rotations =
        //     [
        //         {x: 0, y: (-Math.PI / 1.7), z: 0},
        //         {x: 0, y: (-Math.PI / 3), z: 0},
        //         {x: 0, y: (-Math.PI * 0.87), z: -.3},
        //         {x: 0, y: (-Math.PI / 2), z: 0},
        //         {x: 0, y: (-Math.PI / 2), z: 0}
        //     ]

        //intro
        const duration = 2000
        const elapsedTime = Date.now() - introTime

        if (elapsedTime <= duration) {
            const completeness = elapsedTime / duration
            const easedCompleteness = 1 - (1 - completeness) * (1 - completeness) * (1 - completeness)

            return [
                lerp(0, rolexSettings[0].rotation.x, easedCompleteness),
                lerp((-Math.PI * 0.87), rolexSettings[0].rotation.y, easedCompleteness),
                lerp(-.3, rolexSettings[0].rotation.z, easedCompleteness),
            ]
        }
        //intro end

        let index = Math.floor((scrollPercentage - 0.001) * 4)
        if (index < 0) {
            index = 0
        }

        const startRotation = rolexSettings[index].rotation
        const endRotation = rolexSettings[index + 1].rotation
        const relativeCompleteness = (scrollPercentage - index * (1 / (rolexSettings.length - 1))) * (rolexSettings.length - 1) //should be between 0 and 1

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

        let index = Math.floor((scrollPercentage - 0.001) * 4)
        if (index < 0) {
            index = 0
        }

        const startScale = rolexSettings[index].scale
        const endScale = rolexSettings[index + 1].scale
        const relativeCompleteness = (scrollPercentage - index * (1 / (rolexSettings.length - 1))) * (rolexSettings.length - 1) //should be between 0 and 1

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
