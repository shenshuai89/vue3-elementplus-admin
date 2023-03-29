<template>
  <div class="box">
    <div class="stage p3d">
      <div class="ball_container p3d ball_1">
        <div class="ball"></div>
      </div>
      <div class="ball_container p3d ball_2">
        <div class="ball"></div>
      </div>
      <div class="ball_container p3d ball_3">
        <div class="ball"></div>
      </div>
      <div class="ball_container p3d ball_4">
        <div class="ball"></div>
      </div>
      <div class="ball_container p3d ball_5">
        <div class="ball"></div>
      </div>
      <div class="ball_container p3d ball_6">
        <div class="ball"></div>
      </div>
      <div class="ball_container p3d ball_7">
        <div class="ball"></div>
      </div>
      <div class="ball_container p3d ball_8">
        <div class="ball"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.box {
  width: 900px;
  height: 400px;
  background-color: #67bfeb;
}
// 进行整体的倾斜旋转
.stage {
  transform: rotateX(73deg) rotateY(90deg);
  position: relative;
  top: 20px;
  left: 225px;
  width: 450px;
  height: 450px;
  background-color: #5e3397;
  background: url("../../../assets/340bj.png") no-repeat;
  backface-visibility: hidden;
}
.p3d {
  transform-style: preserve-3d;
  perspective-origin: 10% 10%;
  perspective: 100;
}

/* 球的容器，给该容器做位置偏移，让内部小球成圆形排列。
   设置stage旋转的中心点，transform-origin为stage的一半
*/
.ball_container {
  /* transform-origin设置旋转变化的中心点，小球公转的中心点 */
  transform-origin: 225px 225px;
  position: absolute;
  width: 1100px; //900和450的大小一样，【超过900，值越大，半径越大】 【值小于450，width值越小，小球围起来的半径越大，当为0时，和1350效果一样】
  // height: 100px;
  // color: #5e3397;
  // border: solid 1px #5e3397;
}
.ball {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: all 2s ease-out 0ms;
  // 小球自转的中心点
  transform-origin: 50% 50%;
  position: absolute;
  /* 
     由于中心点是向右偏移,现在的原点(0,0)就位于stage中间
     内部旋转的小球要基于中心点进行偏移。
     right设置偏移中心点的距离，值越大，偏离越远。
  */
  right: 420px;
  overflow: hidden;
}
.ball_1 {
  transform: rotateX(-90deg) rotateY(0deg) translateY(130px);
}
.ball_2 {
  transform: rotateX(-90deg) rotateY(45deg) translateY(130px);
}
.ball_3 {
  transform: rotateX(-90deg) rotateY(90deg) translateY(130px);
}
.ball_4 {
  transform: rotateX(-90deg) rotateY(135deg) translateY(130px);
}
.ball_5 {
  transform: rotateX(-90deg) rotateY(180deg) translateY(130px);
}
.ball_6 {
  transform: rotateX(-90deg) rotateY(225deg) translateY(130px);
}
.ball_7 {
  transform: rotateX(-90deg) rotateY(270deg) translateY(130px);
}
.ball_8 {
  transform: rotateX(-90deg) rotateY(315deg) translateY(130px);
}
.ball_1 .ball {
  background: url("@/assets/avatar/dog2.png") no-repeat;
  background-size: 100%;
}
.ball_2 .ball {
  background: url("@/assets/avatar/car.png") no-repeat;
  background-size: 100%;
}
.ball_3 .ball {
  background: url("@/assets/avatar/cat1.png") no-repeat;
  background-size: 100%;
}
.ball_4 .ball {
  background: url("@/assets/avatar/cat2.png") no-repeat;
  background-size: 100%;
}
.ball_5 .ball {
  background: url("@/assets/avatar/cat3.png") no-repeat;
  background-size: 100%;
}
.ball_6 .ball {
  background: url("@/assets/avatar/dog.png") no-repeat;
  background-size: 100%;
}
.ball_7 .ball {
  background: url("@/assets/avatar/girl.png") no-repeat;
  background-size: 100%;
}
.ball_8 .ball {
  background: url("@/assets/avatar/lovey.png") no-repeat;
  background-size: 100%;
}

.ball_1 .ball {
  animation: cir1 28s linear 0s infinite;
}
.ball_2 .ball {
  animation: cir2 28s linear 0s infinite;
}
.ball_3 .ball {
  animation: cir3 28s linear 0s infinite;
}
.ball_4 .ball {
  animation: cir4 28s linear 0s infinite;
}
.ball_5 .ball {
  animation: cir5 28s linear 0s infinite;
}
.ball_6 .ball {
  animation: cir6 28s linear 0s infinite;
}
.ball_7 .ball {
  animation: cir7 28s linear 0s infinite;
}
.ball_8 .ball {
  animation: cir8 28s linear 0s infinite;
}

/* stage舞台绕Z轴旋转 */
.stage {
  animation: cir 28s linear 0s infinite;
}
@keyframes cir {
  0% {
    transform: rotateX(73deg) rotateY(-0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(73deg) rotateY(-0deg) rotateZ(-360deg);
  }
}
/* 图片小球绕自身Y轴旋转 */
@keyframes cir1 {
  0% {
    transform: rotateY(0deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-360deg) rotateZ(10deg);
  }
}
@keyframes cir2 {
  0% {
    transform: rotateY(-45deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-405deg) rotateZ(10deg);
  }
}
@keyframes cir3 {
  0% {
    transform: rotateY(-90deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-450deg) rotateZ(10deg);
  }
}
@keyframes cir4 {
  0% {
    transform: rotateY(-135deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-495deg) rotateZ(10deg);
  }
}
@keyframes cir5 {
  0% {
    transform: rotateY(-180deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-540deg) rotateZ(10deg);
  }
}
@keyframes cir6 {
  0% {
    transform: rotateY(-225deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-585deg) rotateZ(10deg);
  }
}
@keyframes cir7 {
  0% {
    transform: rotateY(-270deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-630deg) rotateZ(10deg);
  }
}
@keyframes cir8 {
  0% {
    transform: rotateY(-315deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-675deg) rotateZ(10deg);
  }
}
</style>
