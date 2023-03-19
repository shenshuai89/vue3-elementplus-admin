<template>
  <div ref="depthWrapper" class="depth-wrapper"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
// 新建场景
const scene = new THREE.Scene();
// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 设置相机位置
camera.position.set(0, 0, 6);
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer({
  antialias: true, // 抗锯齿
});
renderer.setSize(window.innerWidth, window.innerHeight);

//添加到dom中
const depthWrapper = ref<HTMLDivElement | null>(null);
onMounted(() => {
  depthWrapper.value && depthWrapper.value.appendChild(renderer.domElement);
});
// 加载纹理
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('src/assets/brotherSister.jpeg');
const depthTexture = textureLoader.load('src/assets/brotherSister-depth.jpg');

// 1280 × 855
const geometry = new THREE.PlaneGeometry(24, 15);
// 给模型添加纹理
// const material = new THREE.MeshBasicMaterial({ map: texture });
// 鼠标坐标
const mouse = new THREE.Vector2();
// 将纹理替换为着色器材质
const material = new THREE.ShaderMaterial({
  uniforms: {
    uTexture: { value: texture },
    uDepthTexture: { value: depthTexture },
    uMouse: { value: mouse },
    uTime: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform sampler2D uDepthTexture;
    uniform vec2 uMouse;
    uniform float uTime;
    varying vec2 vUv;
    void main(){
        vec4 color = texture2D(uTexture, vUv);
        vec4 depth = texture2D(uDepthTexture, vUv);
        float depthValue = depth.r;
        float x = vUv.x + (uMouse.x + sin(uTime)) * 0.01*depthValue;
        float y = vUv.y + (uMouse.y+cos(uTime)) * 0.01*depthValue;
        vec4 newColor = texture2D(uTexture, vec2(x, y));
        gl_FragColor = newColor;
    }
  `,
});
/* float distance = distance(uMouse, vUv);
        float alpha = smoothstep(0, 0.1, distance); */

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// render
requestAnimationFrame(function animate() {
    //
  material.uniforms.uMouse.value = mouse;
  material.uniforms.uTime.value = performance.now()/1000
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
});

// mouse move
window.addEventListener("mousemove", (event)=>{
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (event.clientY / window.innerHeight) * 2 + 1;
})
</script>
<style lang="scss" scoped>
.depth-wrapper {
  width: 100%;
  height: 100%;
}
</style>
