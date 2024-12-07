import * as THREE from "three";
import getStarfield from "./src/getStarfield.js";

let rotationSpeed = 0.001;
let starRotationSpeed = 0.0004;
let cameraDistance = 2.1;


const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(w, h);
// document.body.appendChild(renderer.domElement);
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

// Renderer oluşturma
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

// Renderer'ı #canvas elementine ekle
const canvasElement = document.getElementById("canvas");
if (canvasElement) {
    canvasElement.appendChild(renderer.domElement);
} else {
    console.error("Element with id 'canvas' not found!");
}


const earthGroup = new THREE.Group();
scene.add(earthGroup);
const detail = 12;
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshPhongMaterial({
    map: loader.load("./images/ea-night2.jpg"),
    bumpScale: 0.04,
});

const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const stars = getStarfield({ numStars: 2000 });
scene.add(stars);

const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
sunLight.position.set(-2, 0.5, 2.5);
scene.add(sunLight);


function animate() {
    requestAnimationFrame(animate);
    earthMesh.rotation.y += rotationSpeed;
    stars.rotation.y -= starRotationSpeed;
    camera.position.z = cameraDistance;
    renderer.render(scene, camera);
}

animate();

function handleWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerWidth <= 768) {
        cameraDistance = 3.2;
    } else {
        cameraDistance = 2.1;
    }
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', handleWindowResize, false);
handleWindowResize();