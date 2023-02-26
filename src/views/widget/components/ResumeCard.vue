<template>
  <div class="resume">
    <el-row :gutter="15">
      <el-col :span="8"
        ><div class="card card-widget widget-user-2 shadow-sm">
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div class="widget-user-header bg-warning">
            <div class="widget-user-image">
              <img
                class="img-circle elevation-2"
                src="~@/assets/user7-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <!-- /.widget-user-image -->
            <div class="widget-user-desc-wrapper">
              <h3 class="widget-user-username">Nadia Carmichael</h3>
              <h5 class="widget-user-desc">Lead Developer</h5>
            </div>
          </div>
          <div class="card-footer p-0">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Projects <span class="float-right badge bg-primary">31</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Tasks <span class="float-right badge bg-info">5</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Completed Projects
                  <span class="float-right badge bg-success">12</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Followers <span class="float-right badge bg-danger">842</span>
                </a>
              </li>
            </ul>
          </div>
        </div></el-col
      >
      <el-col :span="8">
        <div class="card card-widget widget-user shadow">
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div class="widget-user-header bg-info">
            <h3 class="widget-user-username">Alexander Pierce</h3>
            <h5 class="widget-user-desc">Founder & CEO</h5>
          </div>
          <div class="widget-user-image">
            <img
              class="img-circle elevation-2"
              src="~@/assets/user1-128x128.jpg"
              alt="User Avatar"
            />
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">3,200</h5>
                  <span class="description-text">SALES</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">13,000</h5>
                  <span class="description-text">FOLLOWERS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">35</h5>
                  <span class="description-text">PRODUCTS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </div></el-col
      >
      <el-col :span="8">
        <div class="card card-widget widget-user shadow-lg">
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div
            class="widget-user-header text-white"
            :style="{ background: `url(${photobg}) center center` }"
          >
            <h3 class="widget-user-username text-right">Elizabeth Pierce</h3>
            <h5 class="widget-user-desc text-right">Web Designer</h5>
          </div>
          <div class="widget-user-image">
            <img
              class="img-circle"
              src="~@/assets/user3-128x128.jpg"
              alt="User Avatar"
            />
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">3,200</h5>
                  <span class="description-text">SALES</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">13,000</h5>
                  <span class="description-text">FOLLOWERS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">35</h5>
                  <span class="description-text">PRODUCTS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import photobg from "../../../assets/photo1.png";
</script>
<style lang="scss" scoped>
.resume {
  width: 100%;
  height: 100%;
  .el-row {
    width: 100%;
    height: 100%;
    .el-col-8 {
      width: calc(33.333% - 10px);
      height: 314px;
      .widget-user-2 {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        margin-bottom: 1rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .bg-warning {
          background-color: #ffc107 !important;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
          padding: 1rem;
          display: flex;
          flex-direction: row;
          .widget-user-desc-wrapper {
            margin-left: 20px;
            .widget-user-username {
              font-size: 25px;
              font-weight: 300;
              margin-bottom: 5px;
              margin-top: 5px;
            }
            .widget-user-desc {
              font-size: 1.25rem;
              margin: 0;
            }
          }
          .widget-user-image {
            img {
              float: left;
              height: auto;
              width: 65px;
            }
            .img-circle {
              border-radius: 50%;
            }
          }
        }
        .nav {
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
          flex-direction: column;
          .nav-item {
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            margin: 0;
            .nav-link {
              display: flex;
              padding: 0.5rem 1rem;
              justify-content: space-between;
              .badge {
                color: #fff;
                display: inline-block;
                padding: 0.25em 0.4em;
                font-size: 75%;
                font-weight: 700;
                line-height: 1;
                text-align: center;
                white-space: nowrap;
                vertical-align: baseline;
                border-radius: 0.25rem;
                transition: color 0.15s ease-in-out,
                  background-color 0.15s ease-in-out,
                  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              }
            }
            a {
              color: #007bff;
              text-decoration: none;
              background-color: transparent;
            }
          }
        }
      }
      .widget-user {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        margin-bottom: 1rem;
        .widget-user-header {
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
          height: 135px;
          padding: 1rem;
          text-align: center;
          color: #fff;
          .widget-user-username {
            font-size: 25px;
            font-weight: 300;
            margin-bottom: 0;
            margin-top: 0;
            text-shadow: 0 1px 1px rgb(0 0 0 / 20%);
          }
          .widget-user-desc {
            margin: 0;
            font-size: 1.25rem;
          }
        }
        .widget-user-image {
          left: 50%;
          margin-left: -45px;
          position: absolute;
          top: 130px;
          img {
            border: 3px solid #fff;
            height: auto;
            width: 90px;
          }
        }
        .card-footer {
          padding: 0.75rem 1.25rem;
          background-color: rgba(0, 0, 0, 0.03);
          border-top: 0 solid rgba(0, 0, 0, 0.125);
          padding-top: 77px;
          .row {
            display: flex;
            flex-direction: row;
            .col-sm-4 {
              width: 33.33%;
            }
            .border-right {
              border-right: 1px solid #dee2e6 !important;
            }
            .description-header {
              font-size: 16px;
              font-weight: 600;
              margin: 10px 0 30px 0;
              padding: 0 3px;
            }
            .description-text {
              text-transform: uppercase;
              padding: 0 3px;
              font-size: 12px;
            }
          }
        }
      }
      .card-widget {
        border: 0;
        position: relative;
      }
      h3 {
        margin: 0;
      }
    }
  }
}
</style>
