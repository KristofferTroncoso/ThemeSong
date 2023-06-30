import { useRef, useEffect } from "react";
import { css } from "@emotion/react";

import * as THREE from "three";

/* this needs to stop the animation when unloading */

function VanillaThree() {
  const threeRef = useRef();

  useEffect(() => {
    const container = threeRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div
      ref={threeRef}
      css={css`
        height: 100%;
        width: 100%;
      `}
    ></div>
  );
}

export default VanillaThree;
