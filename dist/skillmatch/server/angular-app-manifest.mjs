
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-O345LWGP.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TC25QBV4.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTL2VSFW.js"
    ],
    "route": "/create-account"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ABMP6VSU.js"
    ],
    "route": "/employers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R4JJWHPB.js"
    ],
    "route": "/job-seekers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UBQJISSE.js"
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
      "chunk-QBSUZNME.js"
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
      "chunk-6KB2P2TH.js"
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
    'index.csr.html': {size: 647, hash: '80e092ccd20a4bf4f90ee988c7c6ae4ee178c67909800b5c1ea0c5f88f29e07f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1160, hash: 'b1af4fdd804434ac2e201f0858f056ec9fe7ee2c31734eb0e80f3b1e7ae8eb0b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11021, hash: 'c958ff29ebc7833e56e66072676a351f77d99cc762677165cb8c5a4ee2c72c9d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13285, hash: '7f1d3a3434eb3b23ea11eba74c06dc75eb407584da450e19dacc67195ef79aa4', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'create-account/index.html': {size: 14479, hash: 'a2a904ef7c781c2b3643278c266b24987b17b498b98c291b0a45253f14f7d79f', text: () => import('./assets-chunks/create-account_index_html.mjs').then(m => m.default)},
    'administrators/index.html': {size: 12087, hash: '3839018859d7b7c144fa1e4a8e3330a4a2096b99a2c1eecf621ed9fb87a39a71', text: () => import('./assets-chunks/administrators_index_html.mjs').then(m => m.default)},
    'job-seekers/index.html': {size: 12316, hash: 'af71b91a6dd15520e3ad82ff1d22916e0fe153f7e3a00fb9f0e04860b0f5b0de', text: () => import('./assets-chunks/job-seekers_index_html.mjs').then(m => m.default)},
    'employers/index.html': {size: 13163, hash: '9e6fe607a12b67caa0cc66efff3d128963c6fd0b076a22b55b37890b6d523304', text: () => import('./assets-chunks/employers_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 13755, hash: 'cac2dc2b47d88f7ee56d7e737aadf1797a957bcaac1637f37ffd6354cf66d494', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 12896, hash: '4009149f193df7167831e5c65fcca60ec3ebf9dc697a45f2ebbda3a1536fcf2c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'post-find-job/index.html': {size: 11173, hash: 'f1236e6519860e5c91e4b72af2ab9c94f0680c76d74ac8524ee445c886a22bdf', text: () => import('./assets-chunks/post-find-job_index_html.mjs').then(m => m.default)},
    'career-guidance/index.html': {size: 12825, hash: '6cb7a1a52bbe605709203e2deba713b6b82220aeec297f2c19f77e51a47434d4', text: () => import('./assets-chunks/career-guidance_index_html.mjs').then(m => m.default)},
    'applicants/index.html': {size: 15481, hash: 'a36d7990a78ce3ac3a7d13bfb7e389ffc5dd20d97b42c62bbc61c32d04248e10', text: () => import('./assets-chunks/applicants_index_html.mjs').then(m => m.default)},
    'create-update-profile/index.html': {size: 13064, hash: 'd29fdd49c2cbc5d8544bcd981ddd01c8ef5cd67a3f13f1b35f381b47bbc7bb36', text: () => import('./assets-chunks/create-update-profile_index_html.mjs').then(m => m.default)},
    'chat-bot/index.html': {size: 12746, hash: 'f71d87b08b3f4cae3ae5f7649ae1a3ca2be85b6f77ae35487d28a4ac5ea43457', text: () => import('./assets-chunks/chat-bot_index_html.mjs').then(m => m.default)},
    'interview-notifications/index.html': {size: 13094, hash: 'f0c7bf021b2d02c6d4b6be7f9ccab63523041cc58331a16401ecce98a99e125f', text: () => import('./assets-chunks/interview-notifications_index_html.mjs').then(m => m.default)},
    'schedule-interview/index.html': {size: 12615, hash: 'abba1ccadecadcef2992dddb97546190002f3a63a9ec8deaf9067959cd0f3d3c', text: () => import('./assets-chunks/schedule-interview_index_html.mjs').then(m => m.default)},
    'manage-users/index.html': {size: 21309, hash: 'b6671299bae01073ad2bf7ac1af75417cbe89c993991fc2de1b86d186a7ada19', text: () => import('./assets-chunks/manage-users_index_html.mjs').then(m => m.default)},
    'system-performance-logs/index.html': {size: 21282, hash: 'dd02554df00aaea5fafdec68b5c985b7d376e2d9ba9713474c3875efdf6b4f3b', text: () => import('./assets-chunks/system-performance-logs_index_html.mjs').then(m => m.default)},
    'upload-review-cv/index.html': {size: 11569, hash: '23c12ebfadda96c660ac88903851507c899fece301b26abbb4b9babbd9260a39', text: () => import('./assets-chunks/upload-review-cv_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
