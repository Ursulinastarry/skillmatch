
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-2Y3ZKV7V.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OM4BSML7.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D276DZVY.js"
    ],
    "route": "/create-account"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MWPPJ3RN.js"
    ],
    "route": "/employers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YLFQJCQJ.js"
    ],
    "route": "/job-seekers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7T26TBAA.js"
    ],
    "route": "/administrators"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q6KGFEHA.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EKLMWSDD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IPYYUQ53.js"
    ],
    "route": "/post-find-job"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4WRHI4H.js"
    ],
    "route": "/applicants"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EVBTIC2C.js"
    ],
    "route": "/career-guidance"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4YT3A5P.js"
    ],
    "route": "/chat-bot"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ONRETVEY.js"
    ],
    "route": "/create-update-profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZQQY4IWM.js"
    ],
    "route": "/interview-notifications"
  },
  {
    "renderMode": 2,
    "route": "/manage-users"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A46FEF42.js"
    ],
    "route": "/schedule-interview"
  },
  {
    "renderMode": 2,
    "route": "/system-performance-logs"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCBVET2M.js"
    ],
    "route": "/upload-review-cv"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 647, hash: 'bdabb3843a6bcaf679e6f626b5b2a33bfcda6be2ffb580201887610e4deb3d7e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1160, hash: 'd0fdac1ad1bd6cbcc3f00cb4e88563611102718c79c43a3a4f6181bee5bb27c9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'create-account/index.html': {size: 12907, hash: 'e35fd3f714ec417307c4584fba4de5a4f9042ed731fcdc5203b10b2868bc4572', text: () => import('./assets-chunks/create-account_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9994, hash: 'ef237db6399cd3dbcf36ef7655fb9df22c7530d0601ecbfac9da02c1bd630919', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 12327, hash: 'ede813dba5e2c51d55abee0f3569012742dad311518ee4fcf527079fdfd4b193', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'administrators/index.html': {size: 10494, hash: '4980d16476991b21b5de787f494b4ca373f245d3db362a8c714461e5a4138ce7', text: () => import('./assets-chunks/administrators_index_html.mjs').then(m => m.default)},
    'job-seekers/index.html': {size: 10723, hash: 'b3fcfe4ad74cf6f322e1e9e504b9f4f66852114c5fd874ee1442bb54de9c59bd', text: () => import('./assets-chunks/job-seekers_index_html.mjs').then(m => m.default)},
    'employers/index.html': {size: 11570, hash: '7a58ba2314694ed5d9d526047f8d60f710c109f3ef0794e7b88b02f3431e4765', text: () => import('./assets-chunks/employers_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11312, hash: '7bbad4f9638336a7bf1d30b53f4bbfcef3bf09667d7b869ebb5ebb90e024e558', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'post-find-job/index.html': {size: 9589, hash: 'f131dae026d1e8bf8c08e961663e1ef1cc191a2bac0fd089e1b753bbd6a603a7', text: () => import('./assets-chunks/post-find-job_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 12171, hash: '078821f8f0c4b0459684e394b58dd5c135f1772b74b56bd9dd41f7d14b1198c6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'career-guidance/index.html': {size: 11241, hash: '919e52970919513fb071c46d67783a18e58712aa998d6db26ced0d46b31cfe06', text: () => import('./assets-chunks/career-guidance_index_html.mjs').then(m => m.default)},
    'applicants/index.html': {size: 13897, hash: 'f6f1f4a15fbcd987b24d06916329269cda0f177ed3214e01ec69da7a36100760', text: () => import('./assets-chunks/applicants_index_html.mjs').then(m => m.default)},
    'interview-notifications/index.html': {size: 11510, hash: '662b1dcd6fe0c3a0ea45f3fdbe6e92662ee6ae254d4e9c217ff7ba6336136521', text: () => import('./assets-chunks/interview-notifications_index_html.mjs').then(m => m.default)},
    'chat-bot/index.html': {size: 11162, hash: 'a63a9f2c024a6e1430529926cebdac4918288418f04f2f1b2c4e81ac3edcac4a', text: () => import('./assets-chunks/chat-bot_index_html.mjs').then(m => m.default)},
    'create-update-profile/index.html': {size: 11480, hash: 'b799830e4101f10bb1ee4158238f5f6d72a3a13606065a9a9124618f12c9d0f7', text: () => import('./assets-chunks/create-update-profile_index_html.mjs').then(m => m.default)},
    'schedule-interview/index.html': {size: 11031, hash: '3204e74aadbfbf70ebbfdb35d7ccd43dabe6d9f433aa6a0084470ebac9935625', text: () => import('./assets-chunks/schedule-interview_index_html.mjs').then(m => m.default)},
    'manage-users/index.html': {size: 19725, hash: '3a887b5f9f0cd2e61c2fd6bfa5268082f42d617a1cf46576adca18ab0cd22f19', text: () => import('./assets-chunks/manage-users_index_html.mjs').then(m => m.default)},
    'system-performance-logs/index.html': {size: 19698, hash: '47083bd7e2e8791d06a02a61ce4c82649bdb231e80e8e7213744844caa4a3d6a', text: () => import('./assets-chunks/system-performance-logs_index_html.mjs').then(m => m.default)},
    'upload-review-cv/index.html': {size: 9985, hash: '2de424b8c722b6225a311db2ee572ad1bbe728c2567b71092f794f6c0ed808be', text: () => import('./assets-chunks/upload-review-cv_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
