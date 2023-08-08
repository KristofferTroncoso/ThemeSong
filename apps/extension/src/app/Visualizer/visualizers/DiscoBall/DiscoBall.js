import { useRef } from "react";
import useAnimation from "../../components/useAnimation";
import { Canvas } from "@react-three/fiber";
import { css } from "@emotion/react";

function Sphere({ analyser, dataArray, ...props }) {
  const mesh = useRef();

  useAnimation(() => {
    analyser.fftSize = 512;
    analyser.getByteFrequencyData(dataArray);

    let minRadius = 1.8;
    let radius = Math.max(Math.max(dataArray[0] - 100, 0) / 1200 + minRadius, minRadius);

    mesh.current.rotation.y += 0.004;
    mesh.current.scale.x = radius;
    mesh.current.scale.y = radius;
    mesh.current.scale.z = radius;
  });

  return (
    <mesh {...props} ref={mesh} scale={0.4}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial roughness={0.3} metalness={1} flatShading={true} />
    </mesh>
  );
}

export const DiscoBall = ({ analyser }) => {
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
        background-color: rgb(0 0 0 / 0.8);
      `}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} color="orange" />
        <pointLight position={[-10, 10, -10]} color="green" />
        <pointLight position={[10, -50, 10]} color="blue" />
        <pointLight position={[10, 10, -10]} color="red" />
        <pointLight position={[10, -10, -10]} color="yellow" />
        <pointLight position={[-10, 5, 8]} color="rebeccapurple" />
        <pointLight position={[-20, 0, 8]} color="dodgerblue" />
        <Sphere position={[0, 0, 0]} analyser={analyser} dataArray={dataArray} />
      </Canvas>
    </div>
  );
};

export default DiscoBall;
