<template>
  <div ref="threeBox"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
// 引入three.js
import * as THREE from "three";
// 创建3D场景对象Scene
const scene = new THREE.Scene();
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(90, 90, 90);
//创建一个材质对象Material
const material = new THREE.MeshLambertMaterial({
  color: 0xff3636, //0xff0000设置材质颜色为红色
});

// 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 10, 0);
scene.add(mesh);

// 定义相机输出画布的尺寸(单位:像素px)
const width = 900; //宽度
const height = 400; //高度

// 36:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(36, width / height, 1, 3000);
//相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(200, 100, 200);
camera.lookAt(mesh.position); //指向mesh对应的位置

// 灯光, 点光源
const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(400, 200, 300);
scene.add(pointLight);
// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(80, 100, 50);
directionalLight.target = mesh;
scene.add(directionalLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
scene.add(pointLightHelper);

// 创建渲染器对象
const renderer = new THREE.WebGLRenderer({
  antialias: true, // 抗锯齿
  // alpha:true
});
renderer.setClearAlpha(0);
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
// renderer.render(scene, camera); //执行渲染操作

//添加到dom中
const threeBox = ref<HTMLDivElement | null>(null);
onMounted(() => {
  threeBox.value && threeBox.value.appendChild(renderer.domElement);
});

// 渲染函数
function render() {
  renderer.render(scene, camera); //执行渲染操作
  mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
}
render();
</script>
<style lang="scss" scoped></style>
