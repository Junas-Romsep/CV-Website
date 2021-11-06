import './style.css'
import * as three from 'three';

const scene = new three.Scene();

const camera = new three.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000)

const renderer = new three.WebGLRenderer({
    canvas: document.querySelector('#bg'),

});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new three.TorusGeometry(7,2,8,75);
const material = new three.MeshBasicMaterial({color: 0x008000 ,wireframe:true});
const torus = new three.Mesh(geometry,material);

scene.add(torus)


function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += .005;
  torus.rotation.y += .005;
  torus.rotation.z += .005;

  renderer.render(scene,camera);
}
animate()