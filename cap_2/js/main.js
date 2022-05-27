// Creating scene
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000); // ---> You can change color by adding .Color()
scene.fog = new THREE.Fog(0x000000, 0.1, 6); // ---> You can even add fog by adding .Fog(color, near, far)

//background img
var loader = new THREE.TextureLoader();
loader.load('./img/bg.png', texture => {
    scene.background = texture;
})

// add camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

// renderer
var renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add geometry
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
 //  wireframe: true, // Render geometry as wireframe.
});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
