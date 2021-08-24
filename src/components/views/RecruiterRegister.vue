<template>
  <div id="recruiter-register">
    <div class="page-header">
      <div class="container">
        <div class="row-form">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Nhà tuyển dụng</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="recruiterRegister">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            /><span class="font-weight-bold"></span>
            <span class="text-black-50"></span><span> </span>
          </div>
        </div>
        <div class="col-md-6 border-right">
          <div class="p-3 py-5">
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Tên tài khoản</label>
                <input type="text" class="form-control" v-model="username" />
                <!-- Check username empty -->
                <div v-if="error_username.length > 0">
                  <ul>
                    <li
                      v-for="item in error_username"
                      v-bind:key="item"
                      style="color: red"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
                <!-- Check password empty -->
                <div v-if="error_password.length > 0">
                  <ul>
                    <li
                      v-for="item in error_password"
                      v-bind:key="item"
                      style="color: red"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Nhập lại mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="confirmPassword"
                />
                <!-- Check confirm password empty -->
                <div v-if="error_confirmPassword.length > 0">
                  <ul>
                    <li
                      v-for="item in error_confirmPassword"
                      v-bind:key="item"
                      style="color: red"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-7">
                <label class="labels">Gmail</label>
                <input type="text" class="form-control" v-model="gmail" />
                <!-- Check phone empty -->
                <div v-if="error_gmail.length > 0">
                  <ul>
                    <li
                      v-for="item in error_gmail"
                      v-bind:key="item"
                      style="color: red"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-5">
                <label class="labels">Điện thoại</label>
                <input type="text" class="form-control" v-model="phone" />
                <!-- Check phone empty -->
                <div v-if="error_phone.length > 0">
                  <ul>
                    <li
                      v-for="item in error_phone"
                      v-bind:key="item"
                      style="color: red"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Họ</label>
                <input type="text" class="form-control" v-model="firstname" />
                <!-- Check fullname empty -->
                <div v-if="error_firstname.length > 0">
                  <ul>
                    <li
                      v-for="item in error_firstname"
                      v-bind:key="item"
                      style="color: red"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div><div class="col-md-6">
                <label class="labels">Tên</label>
                <input type="text" class="form-control" v-model="lastname" />
                <!-- Check fullname empty -->
                <div v-if="error_lastname.length > 0">
                  <ul>
                    <li
                      v-for="item in error_lastname"
                      v-bind:key="item"
                      style="color: red"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center">
              <button
                class="btn btn-common log-btn"
                type="btn btn-common log-btn"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      selected: "",
      username: "",
      password: "",
      confirmPassword: "",
      gmail: "",
      phone: "",
      avatar: "",
      firstname: "",
      lastname: "",
      error_username: [],
      error_password: [],
      error_confirmPassword: [],
      error_gmail: [],
      error_phone: [],
      error_firstname: [],
      error_lastname: [],
    };
  },
  methods: {
    async recruiterRegister() {
      if (
        this.username &&
        this.password &&
        this.gmail &&
        this.phone &&
        this.confirmPassword &&
        this.firstname &&
        this.lastname
      ) {
        await axios
          .post(
            "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/register",
            {
              gmail: this.gmail,
              phone: this.phone,
              username: this.username,
              password: this.password,
              confirmPassword: this.confirmPassword,
              avatar: this.avatar,
              firstname: this.firstname,
              lastname: this.lastname,
            }
          )
          .then(() => {
            Swal.fire({
              title: "Thành công",
              text: "Tạo tài khoản thành công",
              icon: "success",
              confirmButtonText: "Xác nhận",
              timer: 1500,
            });
            this.$router.push("/recruiter-login");
            window.location.reload();
          })
          .catch((e) => {
            (this.error_username = []),
              (this.error_password = []),
              (this.error_firstname = []),
              (this.error_lastname = []),
              (this.error_phone = []),
              (this.confirmPassword = []),
              (this.error_gmail = []),
              console.log(e.response.data);
            if (e.response.status == 400) {
              console.log(e.response);
              if (
                e.response.data.message ==
                "Username bị trùng"
              ) {
                this.error_username.push(
                  "Tên tài khoản đã tồn tại"
                );
              }
              if (
                e.response.data.message ==
                "Username không được chứa ký tự đặc biệt"
              ) {
                this.error_username.push(
                  "Tên tài khoản không được chứa ký tự đặc biệt"
                );
              }
              if (
                e.response.data.message == "Tên không được chứa ký tự đặc biệt"
              ) 
              this.error_confirmPassword.push(
                JSON.stringify(
                  e.response.data.modelState[
                    "recruiter.confirmPassword"
                  ][0].toString()
                ).replace(/^"(.*)"$/, "$1")
              );
              this.error_gmail.push(
                JSON.stringify(
                  e.response.data.modelState["recruiter.gmail"][0].toString()
                ).replace(/^"(.*)"$/, "$1")
              );
              this.error_phone.push(
                JSON.stringify(
                  e.response.data.modelState["recruiter.phone"][0].toString()
                ).replace(/^"(.*)"$/, "$1")
              );
              this.error_username.push(
                JSON.stringify(
                  e.response.data.modelState["recruiter.username"][0].toString()
                ).replace(/^"(.*)"$/, "$1")
              );
              this.error_password.push(
                JSON.stringify(
                  e.response.data.modelState["recruiter.password"][0].toString()
                ).replace(/^"(.*)"$/, "$1")
              );
            }
          });
      } else {
        this.error_username = [];
        this.error_password = [];
        this.error_fullname = [];
        this.error_phone = [];
        this.confirmPassword = [];
        this.error_gmail = [];
        this.error_firstname =[];
        this.error_lastname =[];

        //check username empty
        if (this.username.length <= 0) {
          this.error_username.push("Tên tài khoản không để trống");
        }
        //check passsword empty
        if (this.password.length <= 0) {
          this.error_password.push("Mật khẩu không để trống");
        }
        //check phone empty
        if (this.phone.length <= 0) {
          this.error_phone.push("Số điện thoại không để trống");
        }
        //check gmail empty
        if (this.gmail.length <= 0) {
          this.error_gmail.push("Email không để trống");
        }
        //check fullname empty
        if (this.error_firstname.length <= 0) {
          this.error_firstname.push("Họ không để trống");
        }
        if (this.error_lastname.length <= 0) {
          this.error_lastname.push("Tên không để trống");
        }
      }
    },
  },
};
</script>

<style>
</style>