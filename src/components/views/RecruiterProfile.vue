<template>
  <div id="recruiter-profile">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Nhà tuyển Dụng</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container border-bottom bg-white mt-1 pt-md-3 pt-2">
      <div class="d-flex flex-md-row justify-content-around align-items-center">
        <div class="d-flex flex-md-row align-items-center">
          <div class="p-md-2"></div>
          <div class="p-md-2 p-1" id="info">
            <h5>{{ profile.gmail }}</h5>
          </div>
        </div>
        <div class="d-flex flex-row">
          <router-link to="/recruiter-post-job">
            <div class="btn btn-common">Đăng việc làm</div>
          </router-link>
        </div>
        <div class="rounded p-lg-2 p-1" id="blue-background">
          <div class="d-flex flex-md-row align-items-center">
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right" style="font-weight: bold;"
            >
              <p class="h4">{{ list.length }}</p>
              <div class="text-muted" id="count">Việc làm đã đăng</div>
            </div>
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right" style="font-weight: bold; background-color:lightgreen;"
            >
              <p class="h4">{{ countApproveJob() }}</p>
              <div class="text-muted" id="count">Việc làm đã duyệt</div>
            </div>
            <div
              class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1"
              id="border-right" style="font-weight: bold; background-color:yellow;"
            >
              <p class="h4">{{ countPendingJob() }}</p>
              <div class="text-muted" id="count">Việc làm chờ duyệt</div>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-lg-5 pt-lg-2 pt-md-1">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation" style="color: blue;">
            <a
              href="#companyIn4"
              class="nav-link active"
              id="company"
              data-toggle="tab"
              role="tab"
            >
              <label class="th-label">Thông tin công ty</label>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#approved"
              class="nav-link"
              id="job-approved"
              data-toggle="tab"
              role="tab"
            >
              <label class="th-label">Việc làm đã duyệt</label>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#pending"
              class="nav-link"
              id="job-pending"
              data-toggle="tab"
              role="tab"
            >
              <label class="th-label">Việc làm chờ duyệt</label>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#denied"
              class="nav-link"
              id="job-denied"
              data-toggle="tab"
              role="tab"
            >
              <label class="th-label">Việc làm bị từ chối</label>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#findCV"
              class="nav-link"
              id="searchCV"
              data-toggle="tab"
              role="tab"
            >
              <label class="th-label">Tìm kiếm CV</label>
            </a>
          </li>
        </ul>

        <!--tab content-->
        <div class="tab-content w-100 pt-md-0">
          <!--Company-->
          <div
            class="tab-pane show active"
            id="companyIn4"
            role="tabpanel"
            aria-labelledby="company"
          >
            <div class="container rounded-bottom bg-light">
              <div class="d-flex flex-row" v-if="!hasCompany">
                <div>
                  <router-link to="/company" class="btn btn-common">
                    Tạo mới công ty</router-link
                  >
                </div>
              </div>
              <div class="d-flex flex-row" v-if="hasCompany">
                <div>
                  <router-link to="/company" class="btn btn-common">
                    Cập nhật công ty</router-link
                  >
                </div>
              </div>

              <div class="row mt-2" v-if="!hasCompany">
                <div class="col-md-8">
                  <label class="labels">Bạn là nhà tuyển dụng tư nhân</label>
                </div>
              </div>
              <div class="row mt-2" v-if="hasCompany">
                <div class="left">
                  <div class="col-md-12">
                    <img
                      :src="company.avatar"
                      width="300"
                      height="300"
                      style="margin-bottom: 30px"
                    />
                  </div>
                </div>
                <div class="right">
                  <div class="col-md-12">
                    <label class="labels"
                      >Tên công ty: {{ company.name }}</label
                    >
                  </div>
                  <div class="col-md-12">
                    <label class="labels"
                      >Địa chỉ: {{ company.headquaters }}</label
                    >
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Website: {{ company.website }}</label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels"
                      >Mô tả: <span v-html="company.description"></span
                    ></label>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <br>
            <br>
            <br>
          </div>

          <!--Job approved tab-->
          <div
            class="tab-pane fade"
            id="approved"
            role="tabpanel"
            aria-labelledby="job-approved"
          >
            <div class="container rounded-bottom bg-light">
              <div class="container h-100">
                <div class="row">
                  <div class="card-body text-center">
                    <div id="card">
                      <div class="col-md-12 py-md-4">
                        <div class="right">
                          <div class="table-responsive">
                            <table class="table table-hover mb-0">
                              <thead>
                                <tr class="align-self-center">
                                  <th style="text-align: left">
                                    <label class="th-label" 
                                      >Tên công việc</label
                                    >
                                  </th>
                                  <th>
                                    <label class="th-label"
                                      >Ngày đăng tuyển</label
                                    >
                                  </th>
                                  <th>
                                    <label class="th-label">Ngày hết hạn</label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(job, index) in listApproved"
                                  v-bind:key="index"
                                  v-bind:job="job"
                                >
                                  <td
                                    v-on:click="redirectToListCV(job.id)"
                                    style="text-align: left"
                                  >
                                    <label class="td-label" style="color: #1E90FF">{{
                                      job.name
                                    }}</label>
                                  </td>
                                  <td v-on:click="redirectToListCV(job.id)">
                                    <label class="td-label">{{
                                      job.createDate
                                    }}</label>
                                  </td>
                                  <td v-on:click="redirectToListCV(job.id)">
                                    <label class="td-label">{{
                                      job.endDate
                                    }}</label>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- job pending tab -->
          <div
            class="tab-pane fade"
            id="pending"
            role="tabpanel"
            aria-labelledby="job-pending"
          >
            <div class="container rounded-bottom bg-light">
              <div class="container h-100">
                <div class="row">
                  <div class="card-body text-center">
                    <div id="card">
                      <div class="col-md-12 py-md-4">
                        <div class="right">
                          <div class="table-responsive">
                            <table class="table table-hover mb-0">
                              <thead>
                                <tr class="align-self-center">
                                  <th style="text-align: left">
                                    <label class="th-label"
                                      >Tên công việc</label
                                    >
                                  </th>
                                  <th>
                                    <label class="th-label"
                                      >Ngày đăng tuyển</label
                                    >
                                  </th>
                                  <th>
                                    <label class="th-label">Ngày hết hạn</label>
                                  </th>
                                  <th>
                                    <label class="th-label"></label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(job, index) in listPending"
                                  v-bind:key="index"
                                  v-bind:job="job"
                                >
                                  <td style="text-align: left">
                                    <label class="td-label" style="color: #1E90FF">{{
                                      job.name
                                    }}</label>
                                  </td>
                                  <td>
                                    <label class="td-label" >{{
                                      job.createDate
                                    }}</label>
                                  </td>
                                  <td>
                                    <label class="td-label">{{
                                      job.endDate
                                    }}</label>
                                  </td>
                                  <td>
                                    <div>
                                      <router-link
                                        class="btn btn-warning"
                                        :to="{
                                          path: 'recruiter-job-detail',
                                          query: { id: job.id },
                                        }"
                                        >Xem trước</router-link
                                      >
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <br>
            <br>
            <br>
            <br>
          </div>

          <!-- job denied tab -->
          <div
            class="tab-pane fade"
            id="denied"
            role="tabpanel"
            aria-labelledby="job-denied"
          >
            <div class="container rounded-bottom bg-light">
              <div class="container h-100">
                <div class="row">
                  <div class="card-body text-center">
                    <div id="card">
                      <div class="col-md-12 py-md-4">
                        <div class="right">
                          <div class="table-responsive">
                            <table class="table table-hover mb-0">
                              <thead>
                                <tr class="align-self-center">
                                  <th style="text-align: left">
                                    <label class="th-label"
                                      >Tên công việc</label
                                    >
                                  </th>
                                  <th>
                                    <label class="th-label"
                                      >Ngày đăng tuyển</label
                                    >
                                  </th>
                                  <th>
                                    <label class="th-label"></label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(job, index) in listJobDenied"
                                  v-bind:key="index"
                                  v-bind:job="job"
                                >
                                  <td style="text-align: left; color: #1E90FF" >
                                    <label class="td-label">{{
                                      job.name
                                    }}</label>
                                  </td>
                                  <td>
                                    <label class="td-label">{{
                                      job.createDate
                                    }}</label>
                                  </td>
                                  <td>
                                    <div>
                                      <router-link
                                        class="btn btn-warning"
                                        :to="{
                                          path: 'recruiter-job-detail',
                                          query: { id: job.id },
                                        }"
                                        >ĐIỀU CHỈNH</router-link
                                      >
                                    </div>
                                  </td>
                                  <td>
                                    <div>
                                      <button
                                        class="btn btn-common"
                                        href=""
                                        @click.prevent="modalDetail(job.id)"
                                      >
                                        Lý do
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <br>
            <br>
            <br>
          </div>

          <!-- search CV -->
          <div
            class="tab-pane fade"
            id="findCV"
            role="tabpanel"
            aria-labelledby="searchCV"
          >
            <div class="container my-5">
              <div class="row">
                <div class="form-group">
                  <label for="inputEmail4">Hình thức</label>
                  <select v-model="workingForm" class="form-control" defautValue = 1> 
                    <option :value="1" selected = "selected">Full time</option>
                    <option :value="2">Part time</option>
                  </select>
                </div>
                <div class="form-group">
                <div class="btn btn-common" @click="searchCV" style="margin: 31px">Tìm kiếm</div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead>
                    <tr class="align-self-center">
                      <th style="text-align: left">
                        <label class="th-label">Tên ứng viên</label>
                      </th>
                      <th>
                        <label class="th-label">Giới tính</label>
                      </th>
                      <th>
                        <label class="th-label"> Trường học</label>
                      </th>
                      <th>
                        <label class="th-label"></label>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(cv, index) in allCV"
                      v-bind:key="index"
                      v-bind:cv="cv"
                    >
                      <td style="text-align: left">
                        <label class="td-label"> {{ cv.name }} </label>
                      </td>
                      <td>
                        <label v-if="(cv.sex = true)" class="td-label">
                          Nam
                        </label>
                        <label v-else class="td-label"> Nữ </label>
                      </td>
                      <td>
                        <label class="td-label"> {{ cv.school }} </label>
                      </td>
                      <td>
                        <div> 
                          <router-link
                                class="btn btn-warning" 
                                :to="{
                                  path: 'recruiter-search-cv',
                                  query: { id: cv.id },
                                }"
                                >Chi tiết</router-link
                              >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <!-- pagination -->
                  <center>
                    <div class="justify-content-center d-flex">
                      <paginate
                        :page-count="pageCount"
                        :page-range="3"
                        :margin-pages="2"
                        :click-handler="clickCallback"
                        :container-class="'pagination'"
                        :active-class="'active'"
                        :page-class="'page-item'"
                      >
                      </paginate>
                    </div>
                  </center>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
        <br>
            <br>
            <br>
            <br>
      <div
        class="modal fade"
        id="confirmDelete"
        tabindex="-1"
        aria-labelledby="saveJobMessageLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <ul class="body-desc">
                <li>Bạn có chắc chắn muốn xoá công việc này?</li>
              </ul>
              <button
                class="btn btn-danger log-btn"
                @click.prevent="deleteJobCreated"
              >
                Xác nhận
              </button>
              <button class="btn btn-common log-btn" data-bs-dismiss="modal">
                Huỷ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="viewReason"
        tabindex="-1"
        aria-labelledby="saveJobMessageLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-content">
              <div class="modal-body">
                Lý do việc làm bị xóa:
                <ul
                  v-for="(job, index) in listJobDenied"
                  v-bind:key="index"
                  v-bind:job="job"
                >
                  <li>{{ job.denyMessage }}</li>
                </ul>
                <button class="btn btn-common" data-bs-dismiss="modal">
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Paginate from "vuejs-paginate";

export default {
  data() {
    return {
      profile: "",
      token: "",
      list: [],
      job: {
        type: Object,
        default: null,
      },
      hasCompany: true,
      company: "",
      file: "",
      id_job_created: "",
      id: [],
      listJobDenied: [],
      allCV: [],
      listCV: [],
      jobDenied: {
        type: Object,
        default: null,
      },
      workingForm: "",
      salary: "",
      pageCount: 0,
      cv: {
        type: Object,
        default: null,
      },
    };
  },
  computed: {
    listApproved() {
      return this.list.filter((job) => job.status == 2);
    },
    listPending() {
      return this.list.filter((job) => job.status == 1);
    },
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      var formData = new FormData();
      formData.append("avatar", this.file);
      axios
        .post(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/company/upload-image",
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          window.location.reload();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    countApproveJob() {
      const count = this.list.filter((obj) => obj.status == 2).length;
      return count;
    },
    countPendingJob() {
      const count = this.list.filter((obj) => obj.status == 1).length;
      return count;
    },
    redirectToListCV(id) {
      this.$router.push({ path: "candidate-list", query: { id: id } });
    },
    modalConfirm(id) {
      // eslint-disable-next-line no-undef
      $("#confirmDelete").modal("show");
      this.id_job_created = id;
    },
    modalDetail(id) {
      // eslint-disable-next-line no-undef
      $("#viewReason").modal("show");
      this.id_job_created = id;
    },
    deleteJobCreated() {
      axios
        .delete(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/remove-posted-job/" +
            this.id_job_created,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          (this.listCV = response.data.data), console.log(this.listCV);
        });
    },
    searchCV() {
      let data = {
        workingForm: this.workingForm,
        salary: this.salary,
      };
      axios
        .post(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/search-cvs",
          data,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          this.cv = response.data.data === null ? [] : response.data.data;
          this.pageCount = Math.ceil(this.cv.length / 5);
          this.allCV = this.paginate(this.cv, 5, 1);
        });
    },
    paginate(array, page_size, page_number) {
      return array.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    },
    clickCallback(number) {
      this.allCV = this.paginate(this.cv, 5, number);
    },
  },
  async mounted() {
    if (localStorage.getItem("recruiterProfile")) {
      this.profile = JSON.parse(localStorage.getItem("recruiterProfile"));
    }
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    await axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/posted-jobs",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.data !== null) {
          this.list = response.data.data;
          console.log(this.list);
        }
      });
    await axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/company/self",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        this.company = response.data.data;
      })
      .catch((e) => {
        if (e.response.status === 404) {
          this.hasCompany = false;
        }
      });
    await axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/denied-jobs",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        this.listJobDenied = response.data.data;
        console.log(response)
      });
      await axios
        .post(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/search-cvs",
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          this.cv = response.data.data === null ? [] : response.data.data;
          this.pageCount = Math.ceil(this.cv.length / 5);
          this.allCV = this.paginate(this.cv, 5, 1);
        });
  },

  components: {
    Paginate,
  },
};
</script>

<style>
body {
  background: #eee;
  margin:0;
   padding:0;
   height:100%;
}
.main-container {
  margin-top: 40px;
}
.widget-author {
  margin-bottom: 58px;
}
.author-card {
  position: relative;
  padding-bottom: 48px;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);
}
.author-card .author-card-cover {
  position: relative;
  width: 100%;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.author-card .author-card-cover::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0.5;
}
.author-card .author-card-cover > .btn {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0 10px;
}
.author-card .author-card-profile {
  display: table;
  position: relative;
  margin-top: -22px;
  padding-right: 15px;
  padding-bottom: 16px;
  padding-left: 20px;
  z-index: 5;
}
.author-card .author-card-profile .author-card-avatar,
.author-card .author-card-profile .author-card-details {
  display: table-cell;
  vertical-align: middle;
}
.author-card .author-card-profile .author-card-avatar {
  width: 85px;
  border-radius: 50%;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.author-card .author-card-profile .author-card-avatar > img {
  display: block;
  width: 100%;
}
.author-card .author-card-profile .author-card-details {
  padding-top: 20px;
  padding-left: 15px;
}
.author-card .author-card-profile .author-card-name {
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: bold;
}
.author-card .author-card-profile .author-card-position {
  display: block;
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
}
.author-card .author-card-info {
  margin-bottom: 0;
  padding: 0 25px;
  font-size: 13px;
}
.author-card .author-card-social-bar-wrap {
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 100%;
}
.author-card .author-card-social-bar-wrap .author-card-social-bar {
  display: table;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.11);
}
.btn-style-1.btn-white {
  background-color: #fff;
}
.list-group-item i {
  display: inline-block;
  margin-top: -1px;
  margin-right: 8px;
  font-size: 1.2em;
  vertical-align: middle;
}
.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.list-group-item.active:not(.disabled) {
  border-color: #e7e7e7;
  background: #fff;
  color: #ac32e4;
  cursor: default;
  pointer-events: none;
}
.list-group-flush:last-child .list-group-item:last-child {
  border-bottom: 0;
}

.list-group-flush .list-group-item {
  border-right: 0 !important;
  border-left: 0 !important;
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
a.list-group-item,
.list-group-item-action {
  color: #404040;
  font-weight: 600;
}
.list-group-item {
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid #e7e7e7 !important;
  border-radius: 0 !important;
  color: #404040;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.th-label {
  font-size: 18px;
}

.td-label {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 20px 0px 20px 0px;
}
.nav a:hover {
  background-color: #00BCD4;
}
</style>