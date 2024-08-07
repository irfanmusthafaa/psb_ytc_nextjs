export const API_ENDPOINT = {
  REGISTER: "/api/v1/auth/signup",
  LOGIN_USER: "/api/v1/auth/signin",
  VERIFY_OTP: "/api/v1/auth/verify-otp",
  RESEND_OTP:"/api/v1/auth/resend-otp",
  RESEND_OTP_FORGOT_PASSWORD: "/api/v1/auth/resend-otp-forgot-password",
  FORGOT_PASSWORD: "/api/v1/auth/forgot-password",


  PROFILE: "/api/v1/user/profile",
  CREATE_INFAQ: "/api/v1/infaq/create",
  EDIT_INFAQ: "/api/v1/infaq/edit",
  CREATE_SELEKSI: "/api/v1/seleksi/create",
  EDIT_SELEKSI: "/api/v1/seleksi/edit",
  GET_SOAL_SELEKSI: "/api/v1/soal",
  GET_BANK: "/api/v1/bank",
  CREATE_DOCUMENT: "/api/v1/document/create",
  EDIT_DOCUMENT: "/api/v1/document/edit",

  LOGIN_ADMIN:"/api/v1/admin/signin",
  GET_ALL_USER:'/api/v1/admin/users',
  GET_DETAIL_USER:'/api/v1/admin/user',
  EDIT_STATUS_USER:'/api/v1/admin/users',
  CREATE_SOAL_SELEKSI:'/api/v1/soal/create',
  EDIT_SOAL_SELEKSI:'/api/v1/soal/edit',
  DELETE_SOAL_SELEKSI:'/api/v1/soal/delete',

  GET_SYARAT_PENDAFTARAN:'/api/v1/syarat-pendaftaran',
  CREATE_SYARAT_PENDAFTARAN:'/api/v1/syarat-pendaftaran/create',
  EDIT_SYARAT_PENDAFTARAN:'/api/v1/syarat-pendaftaran/edit',
  DELETE_SYARAT_PENDAFTARAN:'/api/v1/syarat-pendaftaran/delete',

  GET_ALUR_PENDAFTARAN:'/api/v1/alur-pendaftaran',
  CREATE_ALUR_PENDAFTARAN:'/api/v1/alur-pendaftaran/create',
  EDIT_ALUR_PENDAFTARAN:'/api/v1/alur-pendaftaran/edit',
  DELETE_ALUR_PENDAFTARAN:'/api/v1/alur-pendaftaran/delete',

  GET_PROGRAM:'/api/v1/program',
  CREATE_PROGRAM:'/api/v1/program/create',
  EDIT_PROGRAM:'/api/v1/program/edit',
  DELETE_PROGRAM:'/api/v1/program/delete',

  GET_FASILITAS:'/api/v1/fasilitas',
  CREATE_FASILITAS:'/api/v1/fasilitas/create',
  EDIT_FASILITAS:'/api/v1/fasilitas/edit',
  DELETE_FASILITAS:'/api/v1/fasilitas/delete',

  GET_CABANG:'/api/v1/cabang',
  CREATE_CABANG:'/api/v1/cabang/create',
  EDIT_CABANG:'/api/v1/cabang/edit',
  DELETE_CABANG:'/api/v1/cabang/delete',
  
  CREATE_BANK:'/api/v1/bank/create',
  EDIT_BANK:'/api/v1/bank/edit',
  DELETE_BANK:'/api/v1/bank/delete',

  GET_ALL_QUESTION: '/api/v1/questions',
  CREATE_QUESTION: '/api/v1/questions/create',
  EDIT_QUESTION: '/api/v1/questions/edit',
  DELETE_QUESTION: '/api/v1/questions/delete',
  SUBMIT_QUIZ: '/api/v1/questions/submit-quiz',
  GET_CONFIG_SUBMIT: '/api/v1/questions/config/quiz-dates',
  GET_CONFIG_SUBMIT_ADMIN:'/api/v1/questions/config/quiz-dates/admin',
};
