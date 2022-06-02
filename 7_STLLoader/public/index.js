import * as THREE from "./threejs/three.module.js";
import { STLLoader } from "./threejs/STLLoader.js";
import { OrbitControls } from "./threejs/OrbitControls.js";

let scene, camera, renderer, object;

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.z = 7;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene.add(object);

  // let control = new OrbitControls(camera, renderer.domElement);

  let light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 0, 10);
  scene.add(light);

  renderer.render(scene, camera);

  animate();
};

const animate = () => {
  requestAnimationFrame(animate);
  object.rotation.z += 0.01;
  renderer.render(scene, camera);
};

let loader = new STLLoader();
loader.load("/models/MKVI_G3_Helmet_Full.stl", (model) => {
  object = new THREE.Mesh(
    model,
    new THREE.MeshLambertMaterial({ color: 0x80ff00 })
  );
  object.scale.set(0.01, 0.01, 0.01);
  object.position.set(0, 0, 0);
  object.rotation.x = -Math.PI / 2;
  init();
});
