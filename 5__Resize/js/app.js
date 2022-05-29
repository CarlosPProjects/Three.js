import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";

// --------------- CREATING SCENE --------------
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);

// ------------------- ADD CAMERA -------------
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

// ---------------- RENDERER ----------------
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ----------------- ADD GEOMETRY ----------------
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

/**
 * domElement: The HTML element used for event listeners.
 */
var controls = new OrbitControls(camera, renderer.domElement);

// ------------- ADDING LISTENERS -------------
window.addEventListener("resize", redirect, false);

function redirect() {
  // Camera frustum aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;

  // Every time we change the camera settings, we need to update the projection matrix
  camera.updateProjectionMatrix();

  // Let's set the new size
  renderer.setSize(window.innerWidth, window.innerHeight);

  // At this point we should render again the whole new settings.
  renderer.render(scene, camera);
}

// ---------------- ANIMATION ----------------
var animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
