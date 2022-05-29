import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";

//creating scene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);

//add camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add geometry
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

controls.minDistance = 3;
controls.maxDistance = 10;

// ------------- ZOOM CONTROL -------------------
controls.enableZoom = true; // defaul: zoom activated (true) / (false)

// ------------ ROTATION CONTROL -----------------
controls.enableRotate = true; // default: rotate activated (true) / (false)

// ------------ DAMPING -------------------
controls.enableDamping = true; // .enableDamping : Boolean
controls.dampingFactor = 0.5; // .dampingFactor : Float

// --------- POLARANGLE --------------
/**
 * How far you can orbit vertically, upper limit. Range is 0 to Math.PI radians, and default is Math.PI.
 */
controls.maxPolarAngle = Math.PI; // Math.PI / 3

// ---------- .screenSpacePanning : Boolean ----------
/**
 * Defines how the camera's position is translated when panning. 
 * If true, the camera pans in screen space. Otherwise, the camera pans 
 * in the plane orthogonal to the camera's up direction. 
 * Default is true for OrbitControls; false for MapControls.
 */
controls.screenSpacePanning = true;


//animation
var animate = function () {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
