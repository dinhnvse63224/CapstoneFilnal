<template>
  <div id="student-profile">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Thông tin chi tiết CV</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      
    </div>
    <div class="row justify-content-center round">
      <div class="col-lg-10 col-md-12">
        <div class="card shadow-lg card-1">
          <div class="card-body inner-card">
            <a href="#" @click="$router.go(-1)">Trở về trang cá nhân</a>
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-6 col-sm-12">
                <div class="d-flex flex-row">
                  <div>
                    <router-link
                      :to="{ path: 'update-cv', query: { id: id } }"
                      class="btn btn-common"
                    >
                      Cập nhật thông tin CV</router-link
                    >
                  </div>
                  <button 
                    class="btn btn-warning"
                    @click.prevent="modalHideCV(studentCv.id)"
                  >
                    Ẩn CV
                  </button>
                  <button
                    class="btn btn-warning"
                    @click.prevent="modalShowCV(studentCv.id)"
                  >
                    Công khai CV
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-12">
                <img
                  class="rounded-circle"
                  v-if="studentCv.avatar == ''"
                  src="/assets/img/logo.png"
                  width="150"
                  height="150"
                  style="margin: 30px 10px 10px 10px"
                />
                <img
                  class="rounded-circle"
                  v-else
                  v-bind:src="studentCv.avatar"
                  width="150"
                  height="150"
                  style="margin: 30px 10px 10px 10px"
                />
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="row mt-2">
                  <div class="col-md-12">
                    <label class="labels">Tên CV: {{ studentCv.cvName }}</label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Họ & tên: {{ studentCv.name }}</label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels"
                      >Giới tính: {{ studentCv.sex ? "Nam" : "Nữ" }}</label
                    >
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Ngày sinh: {{ studentCv.dob }}</label>
                  </div>
                  <div class="col-md-12">
                    <label class="labels"
                      >Số điện thoại: {{ studentCv.phone }}</label
                    >
                  </div>
                  <div class="col-md-12">
                    <label class="labels"
                      >Trường học: {{ studentCv.school }}</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="col-md-12">
                  <label class="labels"
                    >Kỹ năng: <span v-html="studentCv.skill"></span
                  ></label>
                </div>
                <div class="col-md-12">
                  <label class="labels"
                    >Kinh nghiệm: <span v-html="studentCv.experience"></span
                  ></label>
                </div>
                <div class="col-md-12">
                  <label class="labels"
                    >Ngoại ngữ: <span v-html="studentCv.foreignLanguage"></span
                  ></label>
                </div>
                <div class="col-md-12">
                  <label class="labels"
                    >Mức lương mong muốn:
                    {{ formatPrice(studentCv.desiredSalaryMinimum) }} VNĐ</label
                  >
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-12">
                <center>
                  <button style="background-color: red;"
                    class="btn btn-common"
                    href=""
                    @click.prevent="modalConfirm"
                  >
                    Xoá CV
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <li>Bạn có chắc chắn muốn xoá CV này?</li>
              </ul>
              <button class="btn btn-danger log-btn" @click.prevent="deleteCV">
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
        id="modalShowCV"
        tabindex="-1"
        aria-labelledby="saveJobMessageLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <ul class="body-desc">
                <li>Bạn có chắc chắn muốn công khai CV này?</li>
                <li>Nhà tuyển dụng có thể tìm và xem CV của bạn.</li>
              </ul>
              <button class="btn btn-danger log-btn" @click.prevent="showCV">
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
        id="modalHideCV"
        tabindex="-1"
        aria-labelledby="saveJobMessageLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <ul class="body-desc">
                <li>
                  Bạn có chắc chắn muốn ẩn CV này? Chỉ bạn có thể xem CV này.
                </li>
                <li>
                  Nhà tuyển dụng sẽ không thể tìm kiếm hoặc xem CV của bạn nếu
                  bạn không nộp đơn vào công việc của họ.
                </li>
              </ul>
              <button class="btn btn-danger log-btn" @click.prevent="hideCV">
                Xác nhận
              </button>
              <button class="btn btn-common log-btn" data-bs-dismiss="modal">
                Huỷ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      studentProfile: [],
      id: [],
      studentCv: {},
      list: [],
      job: {
        type: Object,
        default: null,
      },
      message: "",
      token: "",
      id_cv_change: "",
    };
  },

  methods: {
    modalConfirm() {
      // eslint-disable-next-line no-undef
      $("#confirmDelete").modal("show");
    },

    modalShowCV(id) {
      // eslint-disable-next-line no-undef
      $("#modalShowCV").modal("show");
      this.id_cv_change = id;
      
    },

    modalHideCV(id) {
      // eslint-disable-next-line no-undef
      $("#modalHideCV").modal("show");
      this.id_cv_change = id;
    },

    showCV() {
      axios
        .put(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/public/" +
            this.id_cv_change, {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then(() => {
          // eslint-disable-next-line no-undef
          $("#modalShowCV").modal("hide");
          this.$router.push("/student-profile");
          window.location.reload();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            Swal.fire({
              title: "Thật bại",
              text: "Bạn đã công khai CV rồi",
              icon: "error",
              confirmButtonText: "Xác nhận"
            })
          }
          if (e.response.status === 401) {
            console.log(this.id_cv_change);
            console.log(this.token);
          }
        });
    },

    hideCV() {
      axios
        .put(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/unpublic/" +
            this.id_cv_change, {}, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then(() => {
          // eslint-disable-next-line no-undef
          $("#modalHideCV").modal("hide");
          this.$router.push("/student-profile");
          window.location.reload();
        })
        .catch((e) => {
          if (e.response.status === 400) {
            Swal.fire({
              title: "Thật bại",
              text: "Bạn đã Ẩn CV rồi",
              icon: "error",
              confirmButtonText: "Xác nhận"
            })
          }
          if (e.response.status === 401) {
            console.log(this.id_cv_change);
            console.log(this.token);
          }
        });
    },

    deleteCV() {
      axios
        .delete(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/" +
            this.$route.query.id +
            "/remove",
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then(() => {
          // eslint-disable-next-line no-undef
          $("#confirmDelete").modal("hide");
          this.$router.push("/student-profile");
          window.location.reload();
        })
        .catch((e) => {
          if (e.response.status == 400) {
            Swal.fire({
              title: "Thất bại",
              text: "Bạn không thể xoá Cv đã ứng tuyển",
              icon: "error",
              confirmButtonText: "Xác nhận",
              timer: 3000,
            });
          }
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },

  mounted() {
    this.id = this.$route.query.id;
    if (localStorage.getItem("studentProfile")) {
      this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    }
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/student/cv/" +
          this.$route.query.id,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        this.studentCv = response.data.data;
        console.log(this.studentCv);
      });
    axios
      .get(
        "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/applied-jobs",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        this.list = response.data.data;
      });
  },
};
</script>

<style>
</style>