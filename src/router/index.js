import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/Home.vue'
import AllJob from '../components/views/AllJob.vue'
import Contact from '../components/views/Contact.vue'

import StudentProfile from '../components/views/StudentProfile.vue'
import StudentUpdateCV from '../components/views/StudentUpdateCV.vue'
import StudentDetailCV from "../components/views/StudentDetailCV"
import StudentCreateCV from "../components/views/StudentCreateCV"

import JobDetail from '../components/views/JobDetail.vue'

//recruiter//
import RecruiterRegister from '../components/views/RecruiterRegister.vue'
import RecruiterProfile from '../components/views/RecruiterProfile.vue'
import RecruiterLogin from '../components/views/RecruiterLogin.vue'
import ForgotPassword from '../components/views/ForgotPassword.vue'
import ResetPassword from '../components/views/ResetPassword.vue'
import RecruiterPostJob from '../components/views/RecruiterPostJob.vue'
import RecruiterJobDetail from '../components/views/RecruiterJobDetail.vue'
import RecruiterEditJob from '../components/views/RecruiterEditJob.vue'
import CandidateList from  '../components/views/CandidateList.vue'
import RecruiterCompanyCreate from "../components/views/RecruiterCompanyCreateOrEdit"
import RecruiterDetailCV from "../components/views/RecruiterDetailCV"
import RecruiterSearchCV from "../components/views/RecruiterSearchCV"

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/all',
      component: AllJob
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/student-profile',
      component: StudentProfile,
    },
    {
      path: '/student-updateCV',
      component: StudentUpdateCV
    },
    {
      name: 'jobDetail',
      path: '/job-detail',
      component: JobDetail,
    },
    {
      path: '/recruiter-register',
      component: RecruiterRegister,
    },
    {
      name: 'recruiter',
      path: '/recruiter-profile',
      component: RecruiterProfile,
    },
    {
      path: '/recruiter-login',
      component: RecruiterLogin
    },
    {
      path: '/forgot-password',
      component: ForgotPassword
    },
    {
      path: '/reset-password',
      component: ResetPassword
    },
    {
      path: '/recruiter-post-job',
      component: RecruiterPostJob,
    },
    {
      path: '/recruiter-job-detail',
      component: RecruiterJobDetail,
    },
    {
      path: '/recruiter-edit-job',
      component: RecruiterEditJob,
    },
    {
      path: '/candidate-list',
      component: CandidateList,
    },
    {
      path: '/detail-cv',
      component: StudentDetailCV,
    },
    {
      path: '/create-cv',
      component: StudentCreateCV,
    },
    {
      path: '/update-cv',
      component: StudentUpdateCV,
    },
    {
      path: '/company',
      component: RecruiterCompanyCreate,
    },
    {
      path: '/recruiter-detail-cv',
      component: RecruiterDetailCV,
    },
    {
      path: '/recruiter-search-cv',
      component: RecruiterSearchCV,
    }
  ]
})
export default router
