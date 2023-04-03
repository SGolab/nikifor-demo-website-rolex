import React, {useEffect, useMemo, useState} from "react";
import * as THREE from "three";

export default function InteractivePart(props) {

    const [isHovered, setIsHovered] = useState(false)

    const standardMaterial = useMemo(() => {
        return new THREE.MeshStandardMaterial({color: 0xAC393B})
    }, [])

    useEffect(() => {
        document.body.style.cursor = isHovered ? 'pointer' : 'auto';
    }, [isHovered])

    return <mesh
        {...props}
        material={isHovered ? standardMaterial : props.material}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
    />
}
