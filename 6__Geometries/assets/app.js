import * as THREE from "./three.module.js";

// --------------- CREATING SCENE --------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);
// ------------------- ADD CAMERA -------------
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
// ---------------- RENDERER ----------------
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ----------------- ADD GEOMETRY ----------------
var geometry = new THREE.BoxGeometry(2, 2, 2, 5, 5, 5);
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
var object = new THREE.Mesh(geometry, material);
scene.add(object);

var object = new THREE.Mesh(
  new THREE.CircleGeometry(2, 32, 0, Math.PI),
  material
);
object.position.x = 5;
scene.add(object);

var object = new THREE.Mesh(
  new THREE.ConeGeometry(1, 3, 32, 5, true, 0, Math.PI),
  material
);
object.position.x = -5;
scene.add(object);

var object = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.5, 3, 32, 10, true),
  material
);
object.position.y = 5;
scene.add(object);

var object = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 3, 5), material);
object.position.y = -5;
scene.add(object);

var object = new THREE.Mesh(new THREE.TetrahedronGeometry(2), material);
object.position.x = -5;
object.position.y = 5;
scene.add(object);

var object = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), material);
object.position.x = 5;
object.position.y = 5;
scene.add(object);

var object = new THREE.Mesh(
  new THREE.TorusGeometry(2, 1, 32, 32, Math.PI),
  material
);
object.position.x = -5;
object.position.y = -5;
scene.add(object);

var object = new THREE.Mesh(new THREE.RingGeometry(0.3, 1.5, 32, 5), material);
object.position.x = 5;
object.position.y = -5;
scene.add(object);

camera.position.z = 15;

// ------------- ADDING LISTENERS -------------
window.addEventListener(
  "resize",
  () => {
    // Camera frustum aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;

    // Every time we change the camera settings, we need to update the projection matrix
    camera.updateProjectionMatrix();

    // Let's set the new size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // At this point we should render again the whole new settings.
    renderer.render(scene, camera);
  },
  false
);

// ---------------- ANIMATION ----------------
const animate = () => {
  requestAnimationFrame(animate);

  scene.traverse((object) => {
    if (object.isMesh === true) {
      object.rotation.x += 0.01;
      object.rotation.y += 0.01;
    }
  });

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
