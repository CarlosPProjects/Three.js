import * as THREE from "./threejs/three.module.js";
import { STLLoader } from "./threejs/STLLoader.js";
import { OrbitControls } from "./threejs/OrbitControls.js";
import { ThreeMFLoader } from "./threejs/3MFLoader.js";

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
  scene.background = new THREE.Color("#69ABFA");
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  let loader2 = new ThreeMFLoader();
  loader2.load("/models/Camion.3mf", (object2) => {
    object2.position.set(0, 0, 0);
    object2.scale.set(0.01, 0.01, 0.01);
    object2.rotation.x = -Math.PI / 2;
    scene.add(object2);
  });

  let control = new OrbitControls(camera, renderer.domElement);

  let light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 0, 10);
  scene.add(light);

  renderer.render(scene, camera);

  let light3 = new THREE.HemisphereLight(0xffffff);
  light3.position.set(0, 100, 0);
  scene.add(light3);

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
