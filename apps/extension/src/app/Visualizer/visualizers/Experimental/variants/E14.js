import { useRef } from "react";
import useAnimation from "../../../components/useAnimation";
import { Canvas } from "@react-three/fiber";
import { css } from "@emotion/react";

function Box({ analyser, dataArray, ...props }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useAnimation(() => {
    // console.log(dataArray[0]);
    analyser.fftSize = 512;
    analyser.getByteFrequencyData(dataArray);

    let radius = Math.max(dataArray[50] / 170, 0.7);
    // console.log(radius);

    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.01;
    mesh.current.scale.x = radius;
    mesh.current.scale.y = radius;
    mesh.current.scale.z = radius;
  });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.4} metalness={1} flatShading={true} />
    </mesh>
  );
}

function Sphere({ analyser, dataArray, ...props }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useAnimation(() => {
    // console.log(dataArray[0]);
    analyser.fftSize = 512;
    analyser.getByteFrequencyData(dataArray);

    // let radius = Math.max(dataArray[0] / 240, 0.8);
    // let radius = (Math.max(dataArray[freq] - minByte, 0) / growRate + minRadius) * (shorterCanvasSide / 5)
    let radius = Math.max(Math.max(dataArray[0] - 100, 0) / 200, 0.5);

    // console.log(radius);

    mesh.current.rotation.y += 0.01;
    mesh.current.scale.x = radius;
    mesh.current.scale.y = radius;
    mesh.current.scale.z = radius;
  });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={mesh} scale={0.4}>
      <sphereGeometry args={[1, 20, 20]} />
      <meshStandardMaterial roughness={0.4} metalness={1} flatShading={true} />
    </mesh>
  );
}

function R3F({ analyser }) {
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  return (
    <div
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        background-color: rgb(0 0 0 / 0.6);
      `}
    >
      <Canvas>
        <pointLight position={[10, 10, 10]} color="orange" decay={0} intensity={1} />
        <pointLight position={[-10, 10, -10]} color="green" decay={0} intensity={1} />
        <pointLight position={[10, -50, 10]} color="blue" decay={0} intensity={1} />
        <pointLight position={[10, 10, -10]} color="red" decay={0} intensity={1} />
        <pointLight position={[10, -10, -10]} color="yellow" decay={0} intensity={1} />
        <pointLight position={[-10, 5, 8]} color="rebeccapurple" decay={0} intensity={1} />
        <pointLight position={[-20, 0, 8]} color="dodgerblue" decay={0} intensity={1} />
        <Sphere position={[-1.2, 0, 0]} analyser={analyser} dataArray={dataArray} />
        <Box position={[1.2, 0, 0]} analyser={analyser} dataArray={dataArray} />
      </Canvas>
    </div>
  );
}

export default R3F;
