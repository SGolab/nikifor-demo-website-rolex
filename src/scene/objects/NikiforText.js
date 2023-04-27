import {useMemo, useRef, useState} from "react";
import {useLoader, extend, useFrame} from "@react-three/fiber";
import {FontLoader} from "three/addons/loaders/FontLoader";
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'

extend({TextGeometry});

export default function NikiforText() {
    const font = useLoader(FontLoader, './typefaces/optimer_bold.typeface.json')
    const config = useMemo(() => (
        {font, size: .3, height: .05}), [font])

    const [position, setPosition] = useState([-10, -10, -10])
    const [rotation, setRotation] = useState([-1, -1, 0])

    useFrame(() => {
        setPosition([
            position[0] + 0.005,
            position[1] + 0.005,
            position[2],
        ])

        setRotation([
            rotation[0] + 0.001,
            rotation[1] + 0.001,
            rotation[2],
        ])
    })

    return (
        <mesh position={position} rotation={rotation}>
            <textGeometry args={['NIKIFOR', config]}/>
            <meshStandardMaterial color={'silver'}/>
        </mesh>
    )
}
