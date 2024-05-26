import './gameStyle.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'

/* Color Theme Swatches in Hex */
// $On-The-Road-1-hex: #BF3945;
// $On-The-Road-2-hex: #0455BF;
// $On-The-Road-3-hex: #76A62E;
// $On-The-Road-4-hex: #D8D9D7;
// $On-The-Road-5-hex: #D93425;

//----
//----------  variables
//----
const pointsUI = document.querySelector('#pointsUI');
const gameStatus = document.querySelector('#statusUI');
let points = 0;
let gameOver = false;

const randomRangeNum = (max,min)=>{
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const moveObstacles = (arr, speed, maxX, minX, maxZ, minZ) => {
  arr.forEach((el) => {
    el.body.position.z += speed;
    if (el.body.position.z > camera.position.z) {
      el.body.position.x = randomRangeNum(maxX, minX);
      el.body.position.z = randomRangeNum(maxZ, minZ);
    };
    el.mesh.position.copy(el.body.position);
    el.mesh.quaternion.copy(el.body.quaternion);
  });
};




//----
//----------  Scen Setup
//----
const scene = new THREE.Scene();
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0)
})
const cannonDebugger = new CannonDebugger(scene, world, {
  color: "#D8D9D7",
  scale: 1,
});
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 4.5;
  camera.position.y = 1.5;

const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  

// cube
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const materialColor = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );


//----
//----------  Controls
//----
const controls = new OrbitControls( camera, renderer.domElement );


//----
//----------  Ground
//----
const groundBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(15, 0.5, 15)),
});
  groundBody.position.y = -1;
  world.addBody(groundBody);

const ground = new THREE.Mesh( 
  // new box(width,height,depth)
  new THREE.BoxGeometry( 30, 1, 30 ), 
  new THREE.MeshBasicMaterial( { 
    color: 0x76A62E 
  } ) 
);
ground.position.y=-1
scene.add( ground );



//----
//----------  player
//----
const playerBody = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(0.25, 0.25, 0.25)),
  fixedRotation: true,
});
world.addBody(playerBody)

const player = new THREE.Mesh( 
  // new box(width,height,depth)
  new THREE.BoxGeometry( 0.5, 0.5, 0.5), 
  new THREE.MeshBasicMaterial( { color: 0xBF3945 } ) 
);
scene.add( player );

const playerLevelUP = new THREE.Mesh( 
  // new box(width,height,depth)
  new THREE.BoxGeometry( 0.8, 0.8, 0.8), 
  new THREE.MeshBasicMaterial( { color: 0xB4CF66 } ) 
);
// scene.add( playerLevelUP );

playerBody.addEventListener("collide",(e)=> {
  powerups.forEach((el) => {
    if (e.body === el.body) {
      el.body.position.x = randomRangeNum(8, -8);
      el.body.position.z = randomRangeNum(-5, -10);
      el.mesh.position.copy(el.body.position);
      el.mesh.quaternion.copy(el.body.quaternion);
      points += 1;
      console.log(points)

      if (points == 10) {
        player.material.color = 0xB4CF66
      }
      console.log(player.material.color)

      pointsUI = points.toString();
    }
  });

  enemies.forEach((el) => {
    if (e.body === el.body) {
      gameOver = true;
    }
  });
})


// Powerup old
// const powerups = []
// for (let i = 0; i < 10; i++) {
//   const powerup = new THREE.Mesh(
//     new THREE.TorusGeometry(1, 0.4, 16, 50),
//     new THREE.MeshBasicMaterial( { color: 0xD93425 } ) 
//   );
//   powerup.scale.set(0.1, 0.1, 0.1)
//   powerup.name="powerup"+i+1
//   powerup.position.x= randomRangeNum(8,-8)
//   powerup.position.z= randomRangeNum(-5,-10)

//   powerups.push(powerup)
//   scene.add(powerup);
// }




//----
//----------  Powerup update
//----
const powerups = [];
for (let i = 0; i < 10; i++) {
  const posX = randomRangeNum(8,-8)
  const posZ = randomRangeNum(-5,-10)

  const powerup = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 50),
    new THREE.MeshBasicMaterial( { color: 0xD93425 } ) 
  );
  powerup.scale.set(0.1, 0.1, 0.1);
  powerup.position.x= posX;
  powerup.position.z= posX;
  powerup.name="powerup"+ [i+1];
  scene.add(powerup);
  

  const powerupBody = new CANNON.Body({
    shape: new CANNON.Sphere(0.2),
  });

  powerupBody.position.set(posX, 0, posZ);
  world.addBody(powerupBody);

  const powerupObject = {
    mesh: powerup,
    body: powerupBody,
  };

  powerups.push(powerupObject)
}
// console.log(powerups)

// 
//----
//----------  Enemy
//----
const enemies = [];
for (let i = 0; i < 3; i++) {
  const posX = randomRangeNum(8,-8)
  const posZ = randomRangeNum(-5,-10)

  const enemy = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial( { color: 0x0455BF } ) 
  );
  // enemy.scale.set(0.1, 0.1, 0.1);
  enemy.position.x = posX;
  enemy.position.z = posZ;
  enemy.name="enemy"+ [i+1];
  scene.add(enemy);

  const enemyBody = new CANNON.Body({
    shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
  });

  enemyBody.position.set(posX, 0, posZ);
  world.addBody(enemyBody);

  const enemyObject = {
    mesh: enemy,
    body: enemyBody,
  };

  enemies.push(enemyObject);
}



//----
//----------  Particles
//----
scene.fog = new THREE.FogExp2(0xD8D9D7, 0.09, 50);

const geometry = new THREE.BufferGeometry();
const vertices = [];
const size = 2000;

for (let i = 0; i < 5000; i++) {
  const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
  const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
  const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;

  vertices.push(x,y,z);
} 

geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3)
);

const material = new THREE.PointsMaterial({
  size: 2,
  color: 0xffffff,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles)

// Grid Helper
      // GridHelper( size, divisions );
      // const gridHelper = new THREE.GridHelper( 30, 30 );
      // scene.add( gridHelper );

// Animate Loop

function animate() {
	requestAnimationFrame( animate );

  particles.rotation.x+=.0001
  particles.rotation.y+=.0001
  particles.rotation.z+=.0005

  // Moving -- -- -- -- -- -- 
  // moveObstacles(powerups, 0.1, 8, -8, -5, -10);
  // moveObstacles(enemies, 0.08, 8, -8, -5, -10);

  if (!gameOver) {
    moveObstacles(powerups, 0.1, 8, -8, -5, -10);
    moveObstacles(enemies, 0.08, 8, -8, -5, -10);
  } else {
    gameStatus = "GAME OVER";
    playerBody.velocity.set(playerBody.position.x, 5, 5);

    enemies.forEach((el) => {
      scene.remove(el.mesh);
      world.removeBody(el.body);
    });

    if (playerBody.position.z > camera.position.z) {
      scene.remove(player);
      world.removeBody(playerBody);
    }
  }

  controls.update();

  world.fixedStep()

  player.position.copy(playerBody.position);
  player.quaternion.copy(playerBody.quaternion);

  cannonDebugger.update()

	renderer.render( scene, camera );
}

animate();




//----
//----------  Event Listeners
//----
window.addEventListener("resize",()=>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})


// arrow or analog      <--------
  // window.addEventListener("keydown", (e) => {
  //   if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") {
  //     playerBody.position.x += 0.1;
  //   }
  // })

window.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") {
    playerBody.position.z -= 0.1;
  }
  if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") {
    playerBody.position.x += 0.1;
  }
  if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft") {
    playerBody.position.x -= 0.1;
  }
  if (e.key === "r" || e.key === "R") {
    playerBody.position.x = 0;
    playerBody.position.y = 0;
    playerBody.position.z = 0;
  }
  if (e.key === " ") {
    playerBody.position.y = 2;
  }
})