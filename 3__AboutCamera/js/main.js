// ---------------- CREATING SCENE --------------
const scene = new THREE.Scene();

// ----------------ADD CAMERA ----------------
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

// -----------HELPER--------------
// var newcamera = new THREE.PerspectiveCamera(
//   75, // Camera frustum vertical field of view.
//   window.innerWidth / window.innerHeight, // Camera frustum aspect ratio.
//   3, // Camera frustum near plane.
//   10 // Camera frustum far plane.
// );

// ------------Ortographic--------------
var newcamera = new THREE.OrthographicCamera(5, -5, 5, -5, 3, 10);

var helper = new THREE.CameraHelper(newcamera);
scene.add(helper);

// -------------RENDER---------------
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ---------------ADD GEOMETRY-----------
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true, // Render geometry as wireframe.
});
var cube = new THREE.Mesh(geometry, material);
cube.position.z = -5;
scene.add(cube);

// camera.position.z = 5;

// ----------------ANIMATION----------------
var i = 0;
var animate = function () {
  requestAnimationFrame(animate);

  camera.lookAt(newcamera.position);

  camera.position.x = Math.cos(i) * 30;
  camera.position.z = Math.sin(i) * 30;

  i += 0.01;

  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;

  renderer.render(scene, newcamera);

  /**
   * depends on what are we'r going to render, the view will change
   * (scene, newcamera) => let's take the newly created camera view as a helper
   * (scene, camera) => let's see the whole scene
   */
};

animate();
