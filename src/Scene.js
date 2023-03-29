import {Canvas} from "@react-three/fiber";
import {CameraShake, OrbitControls, Sparkles, SpotLight} from '@react-three/drei'

import RolexTransformed from "./RolexTransformed";

function Scene() {

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

            <RolexTransformed position={[0, -1, 0]} scale={0.4} rotation={[0, 1.3 * -(Math.PI / 2), 0]}/>
        </Canvas>
    )
}

export default Scene;
