<template>
  <header id="home">
    <!-- Content section Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Lấy lại mật khẩu</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="content" class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-6 col-xs-12">
            <div class="page-login-form box">
              <form @submit.prevent="resetPassword" class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input
                      type="text"
                      id="sender-email"
                      class="form-control"
                      name="email"
                      placeholder="Tên tài khoản"
                      v-model="username"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mã"
                      v-model="code"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mật khẩu mới"
                      v-model="password"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Nhập lại mật khẩu mới"
                      v-model="confirmPassword"
                    />
                  </div>
                </div>
                <div class="mt-1 text-center">
                  <button
                    @click="resetPassword"
                    class="btn btn-common log-btn"
                    type="btn btn-common log-btn"
                  >
                    Xác nhận
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section End -->
  </header>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      username: "",
      code: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    resetPassword() {
      let data = {
        username: this.username,
        code: this.code,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      axios
        .put(
          "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/forgot-password/update-password",
          data
        )
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: "Thành công",
            text: "Đổi mật khẩu thành công",
            icon: "success",
            confirmButtonText: "Xác nhận",
            timer: 3000,
          });
          this.$router.push({ path: "/recruiter-login" });
        })
        .catch((e) => {
          console.log(e.response);
          if (e.response.status == 400) {
            console.log(e.response);
            if (e.response.data.message == "Dữ liệu không được thiếu") {
              Swal.fire({
                title: "Thất bại",
                text: "Bạn cần nhập dữ liệu",
                icon: "error",
                confirmButtonText: "Xác nhận",
                timer: 3000,
              });
            }
            if (e.response.data.message == "User không tồn tại") {
              Swal.fire({
                title: "Thất bại",
                text: "Tên tài khoản không tồn tại",
                icon: "error",
                confirmButtonText: "Xác nhận",
                timer: 3000,
              });
            }
            if (e.response.data.message == "Mã lấy lại sai") {
              Swal.fire({
                title: "Thất bại",
                text: "Mã cập nhật mật khẩu không chính xác",
                icon: "error",
                confirmButtonText: "Xác nhận",
                timer: 3000,
              });
            }
          }
        });
    },
  },
};
</script>

<style>
</style>