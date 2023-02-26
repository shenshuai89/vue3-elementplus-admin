<template>
  <div class="card-image">
    <el-row :gutter="15">
      <el-col :span="8">
        <div class="card mb-2 bg-gradient-dark">
          <img
            class="card-img-top"
            src="~@/assets/photo1.png"
            alt="Dist Photo 1"
          />
          <div class="card-img-overlay d-flex flex-column justify-content-end">
            <h5 class="card-title text-primary text-white">Card Title</h5>
            <p class="card-text text-white pb-2 pt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor.
            </p>
            <a href="#" class="text-white">Last update 2 mins ago</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card mb-2">
          <img
            class="card-img-top"
            src="~@/assets/photo2.png"
            alt="Dist Photo 2"
          />
          <div
            class="card-img-overlay d-flex flex-column justify-content-center"
          >
            <h5 class="card-title text-white mt-5 pt-2">Card Title</h5>
            <p class="card-text pb-2 pt-1 text-white">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit <br />
              sed do eiusmod tempor.
            </p>
            <a href="#" class="text-white">Last update 15 hours ago</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card mb-2">
          <img
            class="card-img-top"
            src="~@/assets/photo3.jpg"
            alt="Dist Photo 3"
          />
          <div class="card-img-overlay">
            <h5 class="card-title text-primary">Card Title</h5>
            <p class="card-text pb-1 pt-1 text-white">
              Lorem ipsum dolor <br />
              sit amet, consectetur <br />
              adipisicing elit sed <br />
              do eiusmod tempor.
            </p>
            <a href="#" class="text-primary">Last update 3 days ago</a>
          </div>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.card-image {
  color: #fff;
  margin-bottom: 20px;
  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    .card-img-top {
      width: 100%;
    }
    .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .card-title {
        float: left;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
      }
      .card-text {
        clear: both;
        font-size: 0.8rem;
      }
    }
  }
  .el-row {
    .el-col-8 {
      max-width: calc(33.333% - 5px);
    }
  }
}
</style>
