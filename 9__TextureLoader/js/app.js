import * as THREE from "./three.module.js";

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  30000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial();
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);
//  ---------------- TEXTURELOADER ------------
const loader = new THREE.TextureLoader();
loader.load("./descarga.jpg", (texture) => {
  material.map = texture;
  animate();
});
// --------------------------------------------
camera.position.z = 5;

var animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
