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
            <div class="row justify-content-center">
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
                  <br>
                  <br>
                  <div class="col-md-12">
                    <label class="labels">Họ & tên: {{ studentCv.name }}</label>
                  </div>
                  <br>
                  <br>
                  <div class="col-md-12">
                    <label class="labels"
                      >Giới tính: {{ studentCv.sex ? "Nam" : "Nữ" }}</label
                    >
                  </div>
                  <br>
                  <br>
                  <div class="col-md-12">
                    <label class="labels">Ngày sinh: {{ studentCv.dob }}</label>
                  </div>
                  <br>
                  <br>
                  <div class="col-md-12">
                    <label class="labels">Số điện thoại: {{ studentCv.phone }}</label>
                  </div>
                  <br>
                  <br>
                  <div class="col-md-12">
                    <label class="labels">Trường học: {{ studentCv.school }}</label>
                  </div>
                  <br>
                  <br>
                  <br>
                  
                </div>
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="col-md-12">
                  <label class="labels"
                    >Kỹ năng: <span v-html="studentCv.skill"></span
                  ></label>
                </div>
                <br>
                  <br>
                <div class="col-md-12">
                  <label class="labels"
                    >Kinh nghiệm: <span v-html="studentCv.experience"></span
                  ></label>
                </div>
                <br>
                  <br>
                <div class="col-md-12">
                  <label class="labels"
                    >Ngoại ngữ: <span v-html="studentCv.foreignLanguage"></span
                  ></label>
                </div>
                <br>
                  <br>
                <div class="col-md-12">
                  <label class="labels"
                    >Mức lương mong muốn:
                    {{ formatPrice(studentCv.desiredSalaryMinimum) }} VNĐ</label
                  >
                </div>
                <br>
                  <br>
                  <br>
                  
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

export default {
  data() {
    return {
      studentProfile: [],
      id: [],
      studentCv: {},
      workingForm: "",
      salary: "",
      token: "",
      cv: {},
    };
  },

  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },

  // async mounted() {
  //   this.id = this.$route.query.id;
  //   if (localStorage.getItem("token")) {
  //     this.token = localStorage.getItem("token");
  //   }
    // await axios
    //   .get(
    //     "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/recruiter/cv/" +
    //       this.$route.query.id,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${this.token}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     this.cv = response.data.data[this.$route.query.key].cv;
    //     console.log(this.cv);
    //   });
    mounted() {
    this.id = this.$route.query.id;
    if (localStorage.getItem("studentProfile")) {
      this.studentProfile = JSON.parse(localStorage.getItem("studentProfile"));
    }
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    console.log(this.$route.query.id);
    axios
        .get(
            "http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/" + this.$route.query.id + "/applied-students",
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
        ).then((response) => {
      console.log(response.data.data);
      this.studentCv = response.data.data[this.$route.query.key].cv;
      console.log(this.studentCv);
    })
  },
};
</script>

<style>
</style>