import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const PortfolioScene = () => {
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  const renderer = useRef(new THREE.WebGLRenderer());

  useEffect(() => {
    const rendererInstance = renderer.current;
    rendererInstance.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendererInstance.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.current.add(cube);

    camera.current.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      rendererInstance.render(scene.current, camera.current);
    };

    animate();

    return () => {
      document.body.removeChild(rendererInstance.domElement);
    };
  }, []);

  return <></>;
};

export default PortfolioScene;
