<template>
<body>
  <div id="alljob">
    <br>
    <section id="latest-jobs" class="section bg-gray">
      <div class="row">
        <div class="col-md-2">
          <a v-bind:href="listBanner[2].url" target="_blank">
          <img :src="listBanner[2].imgUrl" alt="" width="100%" height="100%" style="padding: 5%"/>
          </a>
        </div>
        <div class="col-md-8">
          <div class="container">
            <div class="col">
              <div class="container">
                <div>
                  <h2 style="font-weight: bold;">Việc làm full time</h2>
                </div>
                <div class="col">
                  <ListFullTimeJob v-bind:listJob="listJobFullTime" />
                </div>
                      <!-- pagination -->
              <br>
              
              </div>
               <center>
        <div class="justify-content-center d-flex">
          <paginate
              :page-count="pageCountFullTime"
              :page-range="3"
              :margin-pages="2"
              :click-handler="clickCallbackFullTime"
              :prev-text="' Trước '"
              :next-text="' Sau '"
              :container-class="'pagination'"
              :active-class="'active'"
              :page-class="'page-item'">
          </paginate>
        </div>
        <br>
        <br>
        <br>
      </center>
              <div class="container">
                <div>
                  <h2 style="font-weight: bold;">Việc làm part time</h2>
                </div>
                <div class="col">
                  <ListPartTimeJob v-bind:listJob="listJobPartTime" />
                </div>
              </div>
              <center>
        <div class="justify-content-center d-flex">
          <paginate
              :page-count="pageCountPartTime"
              :page-range="3"
              :margin-pages="2"
              :click-handler="clickCallbackPartTime"
              :prev-text="' Trước '"
              :next-text="' Sau '"
              :container-class="'pagination'"
              :active-class="'active'"
              :page-class="'page-item'">
          </paginate>
        </div>
      </center>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <a v-bind:href="listBanner[3].url" target="_blank">
          <img :src="listBanner[3].imgUrl" alt="" width="100%" height="100%" style="padding: 5%"/>
          </a>
        </div>
      </div>
    </section>
  </div>
</body>
</template>

<script>
import ListPartTimeJob from "../Job/ListPartTimeJob.vue"
import ListFullTimeJob from "../Job/ListFullTimeJob.vue"
import axios from 'axios'
import Paginate from 'vuejs-paginate'
export default {
  components: {
    ListPartTimeJob,
    ListFullTimeJob,
    Paginate
  },
  data() {
    return {
      listJobFullTime: [],
      listJobPartTime: [],
      listBanner: [],
      pageCountFullTime : 0,
      pageCountPartTime : 0,
    }    
  },
  methods: {
     paginate(array, page_size, page_number) {
      return array.slice((page_number - 1) * page_size, page_number * page_size);
    },
    clickCallbackFullTime(number) {
      this.listJobFullTime = this.paginate(this.ListFullTimeJob, 4, number);
    },
     clickCallbackPartTime(number) {
      this.listJobPartTime = this.paginate(this.ListPartTimeJob, 4, number);
    },

  },
  mounted () {
    // const tokenStr = 'hyaI8lKvbHoKJx4nTPb8Z8O4eZ0COS5DJ_ExJBE9c476nh2vFhjyZ_P6XA3EwGevo_AvqscQZQ0CKdhfKDRUC2RcTmey_d_FqiTz8ALPO8nPu8z2qep1mx9JdCafyzOtx73L62k7syTOfoI0swc3RmCtGgPtcJnfiZXoHYjpHQNqlMM90wBohwC1-D3Uc5e5qo9t2VNT4yZoi1_t3xulNLdJJpK_T2ZwnUtqsSx_EdzaXIjKHb2BK8dW2QY-lULrJcTswJIYu5RqA2vCTD7V0bY07r05p2V57u9ACXMc798SbLfbeK5HiNUdfNEnZfZcPsC8-W-AaxD6EdeFc6kt9g'
    axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/part-time", 
    // { headers: {"Authorization" : `Bearer ${tokenStr}`} }
    ).then((response) => {
      this.ListFullTimeJob = response.data.data;
      this.pageCountFullTime = Math.ceil(this.ListFullTimeJob.length / 4);
      this.listJobFullTime = this.paginate(this.ListFullTimeJob, 4, 1);
      
 });
     axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/full-time", 
    // { headers: {"Authorization" : `Bearer ${tokenStr}`} }
    ).then((response) => {
      this.ListPartTimeJob = response.data.data;
      this.pageCountPartTime = Math.ceil(this.ListPartTimeJob.length / 4);
      this.listJobPartTime = this.paginate(this.ListPartTimeJob, 4, 1);
      
 });
    axios.get("http://capstone2021-test.ap-southeast-1.elasticbeanstalk.com/job/banners")
    .then((response) => {
      this.listBanner = response.data.data;
      console.log(this.listBanner);
    }).catch((e) => {
      console.log(e.response);
    });
  },
};
</script>

<style>
/* pagination */

.pagination_rounded,
.pagination_square {
  margin-top: 50px;
  display: inline-block;
  text-align: center;
}

.pagination_rounded ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.pagination_rounded li:first-child {
  margin-left: 0px;
}

.pagination_rounded ul li {
  float: left;
  margin-left: 20px;
}

.pagination_rounded ul li a:hover {
  background: #00bcd4;
  color: #fff;
  border: 1px solid #00bcd4;
}

a:link {
  text-decoration: none;
}

.pagination_rounded .prev {
  margin-left: 0px;
  border-radius: 35px;
  width: 80px;
  height: 34px;
  line-height: 34px;
}

.pagination_rounded ul li a {
  float: left;
  color: #00bcd4;
  border-radius: 50%;
  line-height: 30px;
  height: 30px;
  width: 30px;
  text-align: center;
  margin-bottom: 40px;
  border: 1px solid black;
}

.pagination_rounded .prev i {
  margin-right: 10px;
}

.pagination_rounded .next {
  border-radius: 35px;
  width: 80px;
  height: 34px;
  line-height: 34px;
}

.visible-xs {
  display: none !important;
}

/* banner ads slider */
body {
  background-color: #eee;
}

.container-fluid {
  margin-top: 30px;
}

.carousel-item img {
  height: 400px;
}
</style>