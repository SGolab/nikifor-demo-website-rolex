import {Canvas} from "@react-three/fiber";
import {CameraShake, OrbitControls, Sparkles, SpotLight} from '@react-three/drei'
import RolexTransformed from "./RolexTransformed";

function Scene({scrollPercentage}) {

    const getRolexPosition = function () {
        const positions = [1, -1, 0, 0, 1]

        let index = Math.floor((scrollPercentage - 0.000001) * 4)
        if (index < 0) {
            index = 0
        }

        const startPos = positions[index]
        const endPos = positions[index + 1]
        const relativeCompleteness = (scrollPercentage - index * (1 / (positions.length - 1))) * (positions.length - 1) //should be between 0 and 1

        return startPos + (endPos - startPos) * relativeCompleteness
    }

    const getRolexRotation = function () {

        const rotations = [(-Math.PI / 2), 0, -Math.PI, (-Math.PI / 2), (-Math.PI / 2)]

        let index = Math.floor((scrollPercentage - 0.000001) * 4)
        if (index < 0) {
            index = 0
        }

        const startRotation = rotations[index]
        const endRotation = rotations[index + 1]
        const relativeCompleteness = (scrollPercentage - index * (1 / (rotations.length - 1))) * (rotations.length - 1) //should be between 0 and 1

        // return startRotation + scrollPercentage * 2 * Math.PI
        return startRotation + (endRotation - startRotation) * relativeCompleteness
    }

    const getRolexScale = function () {
        const scales = [0.4, 0.4, 1, 0.4, 0.4]

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

    return (
        <Canvas shadows camera={{position: [0, 0, 3]}}>
            <color attach="background" args={['#050203']}/>

            {/*<SpotLight*/}
            {/*    position={[-2, 10, 3]}*/}
            {/*    castShadow*/}
            {/*    penumbra={0.2}*/}
            {/*    radiusTop={0.4}*/}
            {/*    radiusBottom={40}*/}
            {/*    distance={12}*/}
            {/*    angle={0.45}*/}
            {/*    attenuation={20}*/}
            {/*    anglePower={3}*/}
            {/*    intensity={0.1}*/}
            {/*    opacity={0.2}*/}
            {/*/>*/}

            <pointLight
                position={[-2, 10, 3]}
                // color={'#f54029'}
            />

            <ambientLight/>

            <OrbitControls makeDefault enableZoom={false} enablePan={false}/>

            <RolexTransformed
                position={[getRolexPosition(), -1, 0]}
                scale={getRolexScale()}
                rotation={[0, getRolexRotation(), 0]}/>
        </Canvas>
    )
}

export default Scene;
