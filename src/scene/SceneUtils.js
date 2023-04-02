import * as THREE from 'three'

export function toScreenPosition(obj, camera, renderer) {
    var vector = new THREE.Vector3();

    var widthHalf = 0.5 * renderer.getContext().canvas.getBoundingClientRect().width;
    var heightHalf = 0.5 * renderer.getContext().canvas.getBoundingClientRect().height;

    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);

    vector.x = (vector.x * widthHalf) + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf;

    return {
        x: vector.x,
        y: vector.y
    };
};
