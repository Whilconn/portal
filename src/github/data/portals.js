const portalGroups = [
  {
    name: 'CSS',
    list: [
      {
        name: 'Sass',
        homepage: 'https://sass-lang.com',
        desc: 'Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言',
        icon: 'https://sass-lang.com/favicon.ico',
        repository: 'https://github.com/sass/sass',
        mirrors: ['https://sass.bootcss.com/', 'https://www.sasscss.com/'],
        stars: 14147,
        pushTime: 1663278301000,
        crawlTime: 1663353704373,
      },
      {
        name: 'Less',
        homepage: 'http://lesscss.org',
        desc: 'Less 是一门向后兼容的 CSS 扩展语言',
        icon: 'http://lesscss.org/public/ico/favicon.ico',
        repository: 'https://github.com/less/less.js',
        mirrors: ['https://less.bootcss.com/'],
        stars: 16840,
        pushTime: 1662031151000,
        crawlTime: 1663353706107,
      },
      {
        name: 'Stylus',
        homepage: 'https://stylus-lang.com',
        desc: '富于表现力、动态的、健壮的 CSS',
        icon: 'https://stylus-lang.com/favicon.ico',
        repository: 'https://github.com/stylus/stylus',
        mirrors: ['https://www.stylus-lang.cn/'],
        stars: 10953,
        pushTime: 1663141722000,
        crawlTime: 1663353709511,
      },
      {
        name: 'PostCSS',
        homepage: 'https://postcss.org',
        desc: '用 JavaScript 转换 CSS 的工具',
        icon: 'https://postcss.org/assets/favicon.659f5617.ico',
        repository: 'https://github.com/postcss/postcss',
        mirrors: ['https://www.postcss.com.cn/', 'https://postcss.docschina.org/'],
        stars: 26694,
        pushTime: 1662191352000,
        crawlTime: 1663353712970,
      },
    ],
  },
  {
    name: 'web 框架',
    list: [
      {
        name: 'React',
        homepage: 'https://reactjs.org',
        desc: '用于构建用户界面的 JavaScript 库',
        icon: 'https://reactjs.org/favicon.ico',
        repository: 'https://github.com/facebook/react',
        mirrors: ['https://react.docschina.org'],
        stars: 194832,
        pushTime: 1663352643000,
        crawlTime: 1663353717782,
      },
      {
        name: 'Angular',
        homepage: 'https://angular.io',
        desc: 'Angular 是一个基于 TypeScript 构建的现代 Web 开发平台',
        icon: 'https://angular.io/assets/images/favicons/favicon.ico',
        repository: 'https://github.com/angular/angular',
        mirrors: ['https://angular.cn/'],
        stars: 83886,
        pushTime: 1663352861000,
        crawlTime: 1663353719056,
      },
      {
        name: 'Vue 2',
        homepage: 'http://v2.vuejs.org',
        desc: '渐进式 JavaScript 框架',
        icon: 'http://v2.vuejs.org/images/icons/apple-icon-57x57.png',
        repository: 'https://github.com/vuejs/vue',
        stars: 199385,
        pushTime: 1663263000000,
        crawlTime: 1663353722056,
        mirrors: [],
      },
      {
        name: 'Vue 3',
        homepage: 'https://vuejs.org/',
        desc: '渐进式 JavaScript 框架',
        icon: 'https://vuejs.org/logo.svg',
        repository: 'https://github.com/vuejs/core',
        stars: 32615,
        pushTime: 1663312046000,
        crawlTime: 1663353724744,
        mirrors: [],
      },
      {
        name: 'Svelte',
        homepage: 'https://svelte.dev',
        desc: '一个构建 web 应用程序的工具，在构建/编译阶段将你的应用程序转换为理想的 JavaScript 应用，而不是在运行阶段解释应用程序的代码',
        icon: 'https://svelte.dev/favicon.png',
        repository: 'https://github.com/sveltejs/svelte',
        mirrors: ['https://www.sveltejs.cn/'],
        stars: 62117,
        pushTime: 1663248389000,
        crawlTime: 1663353734063,
      },
    ],
  },
  {
    name: 'React',
    list: [
      {
        name: 'Create React App',
        homepage: 'https://create-react-app.dev',
        desc: 'React 官方维护的创建 React 单页面应用的工具',
        icon: 'https://create-react-app.dev/img/favicon/favicon.ico',
        repository: 'https://github.com/facebook/create-react-app',
        mirrors: ['https://cra.docschina.org/'],
        stars: 96985,
        pushTime: 1663198997000,
        crawlTime: 1663353735701,
      },
      {
        name: 'Preact',
        homepage: 'https://preactjs.com',
        desc: 'React 的 3kb 轻量化方案，拥有同样的 ES6 API',
        icon: 'https://preactjs.com/favicon.ico',
        repository: 'https://github.com/preactjs/preact',
        stars: 32868,
        pushTime: 1663067612000,
        crawlTime: 1663353738478,
        mirrors: [],
      },
      {
        name: 'React-Router',
        homepage: 'https://reactrouter.com',
        desc: 'React 官方维护的路由库',
        icon: 'https://reactrouter.com/favicon.ico',
        repository: 'https://github.com/remix-run/react-router',
        mirrors: ['https://react-router.docschina.org/'],
        stars: 48080,
        pushTime: 1663259055000,
        crawlTime: 1663353740720,
      },
      {
        name: 'React Native',
        homepage: 'https://reactnative.dev/',
        repository: 'https://github.com/facebook/react-native',
        desc: '基于 React 的移动端跨平台 UI',
        icon: 'https://reactnative.dev/img/pwa/manifest-icon-512.png',
        stars: 104880,
        pushTime: 1663351410000,
        crawlTime: 1663353743356,
        mirrors: [],
      },
      {
        name: 'React Navigation',
        homepage: 'https://reactnavigation.org',
        repository: 'https://github.com/react-navigation/react-navigation',
        desc: 'React Native 应用程序的路由和导航',
        icon: 'https://reactnavigation.org/img/favicon.ico',
        stars: 21622,
        pushTime: 1663342171000,
        crawlTime: 1663353746046,
        mirrors: [],
      },
    ],
  },
  {
    name: 'Vue',
    list: [
      {
        name: 'Element UI',
        homepage: 'https://element.eleme.io/',
        repository: 'https://github.com/ElemeFE/element',
        desc: '基于 Vue 的组件库',
        icon: 'https://element.eleme.io/favicon.ico',
        stars: 52650,
        pushTime: 1663332138000,
        crawlTime: 1663353748960,
        mirrors: [],
      },
      {
        name: 'Vuetify',
        homepage: 'https://vuetifyjs.com',
        repository: 'https://github.com/vuetifyjs/vuetify',
        desc: '基于 Vue 的 Material 组件库',
        icon: 'https://vuetifyjs.com/favicon.ico',
        stars: 35264,
        pushTime: 1663341105000,
        crawlTime: 1663353750454,
        mirrors: [],
      },
      {
        name: 'iView',
        homepage: 'http://iview.talkingdata.com',
        repository: 'https://github.com/iview/iview',
        desc: '基于 Vue 的组件库',
        icon: 'https://file.iviewui.com/file/favicon.ico',
        stars: 23992,
        pushTime: 1655817239000,
        crawlTime: 1663353752496,
        mirrors: [],
      },
      {
        name: 'Vue UI Framework',
        homepage: 'https://vuejs.github.io/ui/',
        repository: 'https://github.com/vuejs/ui',
        desc: 'Vue 官方 UI 组件',
        icon: '',
        stars: 1306,
        pushTime: 1658280380000,
        crawlTime: 1663353753315,
        mirrors: [],
      },
      {
        name: 'vue-loader',
        homepage: 'https://vue-loader.vuejs.org/zh/',
        repository: 'https://github.com/vuejs/vue-loader',
        desc: 'vue-loader 可以将 Vue 单文件组件转换为 JavaScript 模块的 webpack loader',
        icon: '',
        stars: 4866,
        pushTime: 1661742684000,
        crawlTime: 1663353753790,
        mirrors: [],
      },
      {
        name: 'VuePress',
        homepage: 'https://vuepress.vuejs.org',
        desc: '由 Vue 提供支持的静态站点生成器',
        icon: 'https://vuepress.vuejs.org/logo.png',
        repository: 'https://github.com/vuejs/vuepress',
        stars: 20809,
        pushTime: 1663305612000,
        crawlTime: 1663353755262,
        mirrors: [],
      },
      {
        name: 'vue-router',
        homepage: 'http://v3.router.vuejs.org/',
        repository: 'https://github.com/vuejs/vue-router',
        desc: 'vue-router 是 Vue 官方提供的 router',
        icon: 'http://v3.router.vuejs.org/logo.png',
        stars: 18875,
        pushTime: 1662459020000,
        crawlTime: 1663353757104,
        mirrors: [],
      },
      {
        name: 'vue-cli',
        homepage: 'https://cli.vuejs.org/',
        repository: 'https://github.com/vuejs/vue-cli',
        desc: 'vue-cli 帮助用户快速开发 Vue 的脚手架(scaffold)',
        icon: 'https://cli.vuejs.org/favicon.png',
        stars: 29451,
        pushTime: 1662581939000,
        crawlTime: 1663353759554,
        mirrors: [],
      },
      {
        name: 'vue-ssr',
        homepage: 'https://v2.ssr.vuejs.org',
        repository: 'https://github.com/vuejs/vue-ssr-docs',
        desc: 'Vue 官方提供的服务器端渲染(SSR)指南',
        icon: '',
        stars: 558,
        pushTime: 1659843475000,
        crawlTime: 1663353761917,
        mirrors: [],
      },
      {
        name: 'Nuxt.js',
        homepage: 'https://nuxtjs.org',
        repository: 'https://github.com/nuxt/nuxt.js',
        desc: 'Vue.js 元框架，用于快速创建复杂、高性能的通用 Web 应用程序',
        icon: 'https://nuxtjs.org/_nuxt/icons/icon_64x64.a3b4ce.png',
        stars: 41295,
        pushTime: 1663340385000,
        crawlTime: 1663353763657,
        mirrors: [],
      },
      {
        name: 'Vant',
        homepage: 'https://vant-ui.github.io/vant/',
        repository: 'https://github.com/youzan/vant',
        desc: '移动端 Vue 组件库',
        icon: '',
        stars: 20194,
        pushTime: 1663310121000,
        crawlTime: 1663353767551,
        mirrors: [],
      },
      {
        name: 'Cube UI',
        homepage: 'https://didi.github.io/cube-ui/',
        repository: 'https://github.com/didi/cube-ui',
        desc: '基于 Vue 实现的精致移动端组件库',
        icon: '',
        stars: 8993,
        pushTime: 1653876048000,
        crawlTime: 1663353768061,
        mirrors: [],
      },
      {
        name: 'Mand Mobile',
        homepage: 'https://didi.github.io/mand-mobile',
        repository: 'https://github.com/didi/mand-mobile',
        desc: '面向金融场景的 Vue 移动端组件库',
        icon: '',
        stars: 3313,
        pushTime: 1661850024000,
        crawlTime: 1663353768572,
        mirrors: [],
      },
      {
        name: 'Weex',
        homepage: 'https://weex.apache.org',
        repository: 'https://github.com/apache/incubator-weex',
        desc: '基于 Vue 的移动端跨平台 UI',
        icon: 'http://www.apache.org/img/asf_logo.png',
        stars: 13920,
        pushTime: 1622454445000,
        crawlTime: 1663353769084,
        mirrors: [],
      },
    ],
  },
  {
    name: 'Angular',
    list: [
      {
        name: 'Angular Material',
        homepage: 'https://material.angular.io',
        repository: 'https://github.com/angular/components',
        desc: 'Angular Material Design 组件库',
        icon: 'https://material.angular.io/favicon.ico',
        stars: 22959,
        pushTime: 1663351037000,
        crawlTime: 1663353775126,
        mirrors: [],
      },
      {
        name: 'Ionic',
        homepage: 'https://ionicframework.com',
        repository: 'https://github.com/ionic-team/ionic-framework',
        desc: '基于 Angular 的移动端跨平台 UI',
        icon: 'https://ionicframework.com/favicon.ico',
        stars: 47951,
        pushTime: 1663353375000,
        crawlTime: 1663353777583,
        mirrors: [],
      },
    ],
  },
  {
    name: '组件库',
    list: [
      {
        name: 'Ant Design',
        homepage: 'https://ant.design',
        repository: 'https://github.com/ant-design/ant-design',
        desc: '企业级的 UI 设计语言和 React 实现',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        stars: 81896,
        pushTime: 1663344005000,
        crawlTime: 1663353780551,
        mirrors: [],
      },
      {
        name: 'Ant Design Pro',
        homepage: 'https://pro.ant.design',
        repository: 'https://github.com/ant-design/ant-design-pro',
        desc: '开箱即用的中台前端/设计解决方案',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
        stars: 32876,
        pushTime: 1662604002000,
        crawlTime: 1663353782600,
        mirrors: [],
      },
      {
        name: 'Ant Design Mobile',
        homepage: 'https://mobile.ant.design',
        repository: 'https://github.com/ant-design/ant-design-mobile',
        desc: '一个基于 Preact / React / React Native 的 UI 组件库',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        stars: 10510,
        pushTime: 1663325778000,
        crawlTime: 1663353784648,
        mirrors: [],
      },
      {
        name: 'Ant Design Vue',
        homepage: 'https://antdv.com/',
        repository: 'https://github.com/vueComponent/ant-design-vue',
        desc: 'Ant Design 的 Vue 实现',
        icon: 'https://aliyuncdn.antdv.com/favicon.ico',
        stars: 17116,
        pushTime: 1663164033000,
        crawlTime: 1663353786639,
        mirrors: [],
      },
      {
        name: 'Ant Design Vue Pro',
        homepage: 'https://pro.antdv.com',
        repository: 'https://github.com/vueComponent/ant-design-vue-pro',
        desc: '开箱即用的中台前端/设计解决方案',
        icon: 'https://pro.antdv.com/logo.png',
        stars: 9691,
        pushTime: 1663248123000,
        crawlTime: 1663353787972,
        mirrors: [],
      },
      {
        name: 'NG-ZORRO',
        homepage: 'https://ng.ant.design',
        repository: 'https://github.com/NG-ZORRO/ng-zorro-antd',
        desc: 'Ant Design 的 Angular 实现',
        icon: 'https://ng.ant.design/favicon.ico',
        stars: 8259,
        pushTime: 1663308105000,
        crawlTime: 1663353788991,
        mirrors: [],
      },
      {
        name: 'NG-ZORRO-MOBILE',
        homepage: 'http://ng.mobile.ant.design',
        repository: 'https://github.com/NG-ZORRO/ng-zorro-antd-mobile',
        desc: 'Ant Design Mobile 的 Angular 实现',
        icon: 'http://ng.mobile.ant.design/favicon.ico',
        stars: 765,
        pushTime: 1663343796000,
        crawlTime: 1663353789964,
        mirrors: [],
      },
      {
        name: 'ng-alain',
        homepage: 'https://ng-alain.com',
        repository: 'https://github.com/ng-alain/ng-alain',
        desc: '基于 ng-zorro-antd 的中台前端解决方案',
        icon: 'https://ng-alain.com/assets/img/logo-color.png',
        stars: 4371,
        pushTime: 1661687320000,
        crawlTime: 1663353791346,
        mirrors: [],
      },
      {
        name: 'react-component',
        homepage: 'https://slider.react-component.now.sh/',
        desc: 'ant design 内部使用的 React 基础组件',
        icon: '',
        repository: 'https://github.com/react-component',
        stars: 2826,
        pushTime: 1661935082000,
        crawlTime: 1663353794591,
        mirrors: [],
      },
    ],
  },
  {
    name: '小程序框架',
    list: [
      {
        name: 'Taro',
        homepage: 'https://docs.taro.zone/',
        desc: 'Taro 是一套遵循 React 语法规范的 多端开发 解决方案。',
        icon: 'https://docs.taro.zone/img/taroLogo180.png',
        repository: 'https://github.com/NervJS/taro',
        mirrors: ['https://taro-docs.jd.com/'],
        stars: 31588,
        pushTime: 1663332533000,
        crawlTime: 1663353815164,
      },
      {
        name: 'kbone',
        homepage: 'https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/',
        desc: 'kbone 用于支持一个项目可以同时在 Web 端和小程序端被使用',
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico',
        repository: 'https://github.com/wechat-miniprogram/kbone-template-vue',
        stars: 327,
        pushTime: 1648716161000,
        crawlTime: 1663353817670,
        mirrors: [],
      },
      {
        name: 'omi',
        homepage: 'http://omijs.org',
        desc: '前端跨框架跨平台框架，提供桌面、移动和小程序整体解决方案',
        icon: 'https://tencent.github.io/omi/packages/admin/favicon.ico',
        repository: 'https://github.com/Tencent/omi',
        stars: 12392,
        pushTime: 1663146819000,
        crawlTime: 1663353819157,
        mirrors: [],
      },
      {
        name: 'wepy',
        homepage: 'https://wepyjs.gitee.io/wepy-docs/',
        desc: 'WePY 是一款让小程序支持组件化开发的框架，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序',
        icon: '',
        repository: 'https://github.com/Tencent/wepy',
        stars: 21897,
        pushTime: 1661990850000,
        crawlTime: 1663353822100,
        mirrors: [],
      },
      {
        name: 'mpvue',
        homepage: 'http://mpvue.com',
        desc: '框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。',
        icon: 'http://mpvue.com/assets/img/logo.0aaccdfd.png',
        repository: 'https://github.com/mpvue/mpvue-docs',
        stars: 107,
        pushTime: 1587718858000,
        crawlTime: 1663353823152,
        mirrors: [],
      },
      {
        name: 'mpx',
        homepage: 'https://mpxjs.cn',
        desc: 'Mpx 是一款致力于提高小程序开发体验的增强型小程序框架，通过 Mpx，我们能够以最先进的 web 开发体验来开发生产性能深度优化的小程序。',
        icon: 'https://mpxjs.cn/favicon.ico',
        repository: 'https://github.com/didi/mpx',
        stars: 3087,
        pushTime: 1663316792000,
        crawlTime: 1663353826308,
        mirrors: [],
      },
      {
        name: 'chameleon',
        homepage: 'http://cml.didi.cn/',
        desc: '跨端统一解决方案，一套代码运行多端，一端所见即多端所见',
        icon: 'http://cml.didi.cn/brand/logo.png',
        repository: 'https://github.com/didi/chameleon',
        stars: 8927,
        pushTime: 1658180948000,
        crawlTime: 1663353827278,
        mirrors: [],
      },
      {
        name: 'uni-app',
        homepage: 'https://uniapp.dcloud.io',
        desc: '框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。',
        icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788',
        repository: 'https://github.com/dcloudio/uni-app',
        stars: 37123,
        pushTime: 1663330107000,
        crawlTime: 1663353827965,
        mirrors: [],
      },
      {
        name: 'Remax',
        homepage: 'https://remaxjs.github.io/remax/',
        desc: 'Remax 将 React 运行在小程序环境中，让你可以使用完整的 React 进行小程序开发。',
        icon: '',
        repository: 'https://github.com/remaxjs/remax',
        stars: 4390,
        pushTime: 1661744034000,
        crawlTime: 1663353828989,
        mirrors: [],
      },
    ],
  },
  {
    name: '状态管理',
    list: [
      {
        name: 'Mobx',
        homepage: 'http://mobx.js.org',
        desc: '简单、可扩展的状态管理',
        icon: '',
        repository: 'https://github.com/mobxjs/mobx',
        stars: 25681,
        pushTime: 1662573081000,
        crawlTime: 1663353829497,
        mirrors: [],
      },
      {
        name: 'React Redux',
        homepage: 'https://react-redux.js.org',
        desc: 'React 官方版本 Redux',
        icon: 'https://react-redux.js.org/img/favicon/favicon.ico',
        repository: 'https://github.com/reduxjs/react-redux',
        stars: 22363,
        pushTime: 1662128668000,
        crawlTime: 1663353833288,
        mirrors: [],
      },
      {
        name: 'Redux',
        homepage: 'https://cn.redux.js.org/',
        desc: 'JavaScript 状态容器，提供可预测化的状态管理',
        icon: 'https://cn.redux.js.org/img/favicon/favicon.ico',
        repository: 'https://github.com/nefe/redux-in-chinese',
        stars: 3451,
        pushTime: 1663317802000,
        crawlTime: 1663353839125,
        mirrors: [],
      },
      {
        name: 'Vuex',
        homepage: 'https://vuex.vuejs.org',
        repository: 'https://github.com/vuejs/vuex',
        desc: 'vuex 是 Vue 官方提供的状态管理工具',
        icon: 'https://vuex.vuejs.org/logo.png',
        stars: 27772,
        pushTime: 1661893087000,
        crawlTime: 1663353841874,
        mirrors: [],
      },
    ],
  },
  {
    name: '模板引擎',
    list: [
      {
        name: 'EJS',
        homepage: 'https://ejs.co/',
        desc: 'JavaScript 模板引擎',
        icon: 'https://ejs.co/favicon.ico',
        repository: 'https://github.com/mde/ejs',
        stars: 6615,
        pushTime: 1660668038000,
        crawlTime: 1663353843687,
        mirrors: [],
      },
      {
        name: 'Pug',
        homepage: 'https://pugjs.org',
        desc: 'JavaScript 模板引擎',
        icon: '',
        repository: 'https://github.com/pugjs/pug',
        stars: 20923,
        pushTime: 1658422991000,
        crawlTime: 1663353845645,
        mirrors: [],
      },
      {
        name: 'Handlebars.js',
        homepage: 'http://handlebarsjs.com',
        desc: 'JavaScript 模板引擎',
        icon: 'http://handlebarsjs.com/images/handlebars_logo.png',
        repository: 'https://github.com/wycats/handlebars.js',
        stars: 16767,
        pushTime: 1663227358000,
        crawlTime: 1663353848926,
        mirrors: [],
      },
    ],
  },
  {
    name: 'JS库',
    list: [
      {
        name: 'RxJS',
        homepage: 'https://rxjs.dev',
        desc: 'RxJS 是 Reactive Extensions 的 JavaScript 实现，可以通过响应式和函数式编程模型组合异步数据流',
        icon: 'https://rxjs.dev/assets/images/favicons/favicon.ico',
        repository: 'https://github.com/ReactiveX/RxJS',
        stars: 27702,
        pushTime: 1662972028000,
        crawlTime: 1663353862366,
        mirrors: [],
      },
      {
        name: 'Cycle.js',
        homepage: 'http://cycle.js.org',
        desc: '函数式和响应式的 JavaScript 框架',
        icon: 'http://cycle.js.org/img/cyclejs_logo.svg',
        repository: 'https://github.com/cyclejs/cyclejs',
        stars: 10139,
        pushTime: 1658574269000,
        crawlTime: 1663353871585,
        mirrors: [],
      },
      {
        name: 'Ramda',
        homepage: 'https://ramdajs.com',
        desc: '一款实用的 JavaScript 函数式编程库',
        icon: 'https://ramdajs.com/favicon.ico',
        repository: 'https://github.com/ramda/ramda',
        stars: 22363,
        pushTime: 1663311591000,
        crawlTime: 1663353875672,
        mirrors: [],
      },
      {
        name: 'localForage',
        homepage: 'https://localforage.github.io/localForage',
        desc: '通过简单类似 localStorage API 的异步数据存储来改进你的 Web 应用程序的离线体验',
        icon: '',
        repository: 'https://github.com/localForage/localForage',
        mirrors: ['https://localforage.docschina.org/'],
        stars: 21006,
        pushTime: 1653968944000,
        crawlTime: 1663353878141,
      },
      {
        name: 'Day.js',
        homepage: 'https://day.js.org',
        desc: '处理时间和日期的 JavaScript 函数库',
        icon: 'https://day.js.org/img/favicon.ico',
        repository: 'https://github.com/iamkun/dayjs',
        stars: 40311,
        pushTime: 1663004117000,
        crawlTime: 1663353878650,
        mirrors: [],
      },
      {
        name: 'Moment.js',
        homepage: 'momentjs.com',
        desc: '处理时间和日期的 JavaScript 函数库',
        icon: '',
        repository: 'https://github.com/moment/moment',
        stars: 46908,
        pushTime: 1660336189000,
        crawlTime: 1663353881126,
        mirrors: [],
      },
      {
        name: 'Lodash',
        homepage: 'https://jldec.github.io/lodash-doc-2',
        desc: '一个现代的 JavaScript 工具库',
        icon: '',
        repository: 'https://github.com/jldec/lodash-doc-src',
        stars: 1,
        pushTime: 1459875100000,
        crawlTime: 1663353881578,
        mirrors: [],
      },
      {
        name: 'jQuery',
        homepage: 'https://jquery.com',
        desc: '高效精简强大的工具库',
        icon: 'https://jquery.com/favicon.ico',
        repository: 'https://github.com/jquery/jquery',
        stars: 56693,
        pushTime: 1663168875000,
        crawlTime: 1663353882132,
        mirrors: [],
      },
      {
        name: 'Zepto',
        homepage: 'http://zeptojs.com',
        desc: 'Zepto是一个轻量级的针对现代高级浏览器的JavaScript库，它与jquery有着类似的api',
        icon: 'http://zeptojs.com/icon.png',
        repository: 'https://github.com/madrobby/zepto',
        mirrors: ['https://www.zeptojs.com.cn/'],
        stars: 14961,
        pushTime: 1661765221000,
        crawlTime: 1663353885000,
      },
    ],
  },
  {
    name: '微前端',
    list: [
      {
        name: 'single-spa',
        homepage: 'https://single-spa.js.org/',
        desc: 'JavaScript 框架，将多个微前端组合成一个应用程序',
        icon: 'https://single-spa.js.org/img/single-spa-mark-magenta.svg',
        repository: 'https://github.com/single-spa/single-spa',
        stars: 11662,
        pushTime: 1662730820000,
        crawlTime: 1663353898107,
        mirrors: [],
      },
      {
        name: 'qiankun',
        homepage: 'https://qiankun.umijs.org',
        repository: 'https://github.com/umijs/qiankun',
        desc: '为微前端提供快速、简单和完整的解决方案',
        icon: 'https://gw.alipayobjects.com/mdn/rms_655822/afts/img/A*4sIUQpcos_gAAAAAAAAAAAAAARQnAQ',
        stars: 13343,
        pushTime: 1663234013000,
        crawlTime: 1663353900972,
        mirrors: [],
      },
    ],
  },
  {
    name: 'Node.js',
    list: [
      {
        name: 'Node.js',
        homepage: 'https://nodejs.org',
        desc: '基于 V8 引擎的 JavaScript 运行环境',
        icon: 'https://nodejs.org/favicon.ico',
        repository: 'https://github.com/nodejs/node',
        mirrors: ['http://nodejs.cn/'],
        stars: 90358,
        pushTime: 1663353890000,
        crawlTime: 1663353902023,
      },
      {
        name: 'Deno',
        homepage: 'https://manual.deno.js.cn/introduction',
        desc: 'Deno 是一个 JavaScript/TypeScript 的运行时',
        icon: 'https://manual.deno.js.cn/favicon.ico',
        repository: 'https://github.com/denocn/deno_docs',
        stars: 40,
        pushTime: 1662934365000,
        crawlTime: 1663353905274,
        mirrors: [],
      },
      {
        name: 'Koa',
        homepage: 'https://koajs.com',
        desc: 'Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石',
        icon: '',
        repository: 'https://github.com/koajs/koa',
        mirrors: ['https://koa.bootcss.com/'],
        stars: 33105,
        pushTime: 1662996337000,
        crawlTime: 1663353907118,
      },
      {
        name: 'egg',
        homepage: 'https://eggjs.org',
        repository: 'https://github.com/eggjs/egg',
        desc: '为企业级框架和 Node.js & Koa 应用程序而生',
        icon: 'https://eggjs.org/favicon.png',
        stars: 18159,
        pushTime: 1661685690000,
        crawlTime: 1663353910908,
        mirrors: [],
      },
      {
        name: 'Express',
        homepage: 'https://expressjs.com',
        repository: 'https://github.com/expressjs/express',
        desc: '快速极简的 Web 框架',
        icon: 'https://expressjs.com/images/favicon.png',
        stars: 58349,
        pushTime: 1663189144000,
        crawlTime: 1663353912750,
        mirrors: [],
      },
      {
        name: 'nest',
        homepage: 'https://nestjs.com',
        repository: 'https://github.com/nestjs/nest',
        desc: '渐进式 Node.js 框架，构建高效、可靠和可扩展的 server 应用程序',
        icon: 'https://nestjs.com/apple-touch-icon.50147714.png',
        stars: 50750,
        pushTime: 1663339968000,
        crawlTime: 1663353915498,
        mirrors: [],
      },
      {
        name: 'npm',
        homepage: 'https://docs.npmjs.com/cli/',
        desc: 'npm 是 JavaScript package 管理工具，在这里可以找到可复用代码，并以强大的全新方式进行聚合',
        icon: '',
        repository: 'https://github.com/npm/cli',
        stars: 6358,
        pushTime: 1663298310000,
        crawlTime: 1663353921248,
        mirrors: [],
      },
      {
        name: 'pnpm',
        homepage: 'https://pnpm.io',
        desc: 'Fast, disk space efficient package manager',
        icon: 'https://pnpm.io/img/favicon.png',
        repository: 'https://github.com/pnpm/pnpm',
        stars: 19451,
        pushTime: 1663333195000,
        crawlTime: 1663353926164,
        mirrors: [],
      },
      {
        name: 'yarn',
        homepage: 'https://classic.yarnpkg.com',
        desc: '快速、可靠和安全的依赖管理',
        icon: 'https://classic.yarnpkg.com/favicon.ico',
        repository: 'https://github.com/yarnpkg/yarn',
        stars: 40838,
        pushTime: 1662504193000,
        crawlTime: 1663353928724,
        mirrors: [],
      },
    ],
  },
  {
    name: '可视化工具',
    list: [
      {
        name: 'three.js',
        homepage: 'https://threejs.org/',
        repository: 'https://github.com/mrdoob/three.js',
        desc: 'JavaScript 3d 库',
        icon: 'https://threejs.org/favicon.ico',
        stars: 85328,
        pushTime: 1663341984000,
        crawlTime: 1663353931181,
        mirrors: [],
      },
      {
        name: 'ECharts',
        homepage: 'https://echarts.apache.org',
        repository: 'https://github.com/ecomfe/echarts',
        desc: '使用 JavaScript 实现的开源可视化库',
        icon: 'https://echarts.apache.org/favicon.ico',
        stars: 52484,
        pushTime: 1663154236000,
        crawlTime: 1663353933536,
        mirrors: [],
      },
      {
        name: 'SpriteJS',
        homepage: 'http://spritejs.com',
        repository: 'https://github.com/spritejs/spritejs',
        desc: '跨平台的轻量级 2D 渲染对象模型',
        icon: 'http://spritejs.com/favicon.ico',
        stars: 4969,
        pushTime: 1656818968000,
        crawlTime: 1663353936711,
        mirrors: [],
      },
      {
        name: 'AntV',
        homepage: 'https://g2.antv.vision',
        repository: 'https://github.com/antvis',
        desc: '基于全新一代数据可视化解决方案 AntV',
        icon: 'https://g2.antv.vision/favicon-32x32.png?v=9772447a8d07a8fe19894b5176c6cb0d',
        mirrors: ['https://antv.gitee.io/zh'],
        stars: 11358,
        pushTime: 1663342599000,
        crawlTime: 1663353940241,
      },
      {
        name: 'D3.js',
        homepage: 'https://d3js.org',
        repository: 'https://github.com/d3/d3',
        desc: '一个遵循 Web 标准，用于可视化数据的 JavaScript 库',
        icon: 'https://d3js.org/favicon.png',
        stars: 102787,
        pushTime: 1657377734000,
        crawlTime: 1663353943981,
        mirrors: [],
      },
      {
        name: 'v-charts',
        homepage: 'https://v-charts.js.org',
        repository: 'https://github.com/elemefe/v-charts',
        desc: '基于 Vue 和 ECharts 封装的图表组件',
        icon: 'https://v-charts.js.org/favicon.ico',
        stars: 6671,
        pushTime: 1648213525000,
        crawlTime: 1663353946559,
        mirrors: [],
      },
    ],
  },
  {
    name: 'Linters',
    list: [
      {
        name: 'ESLint',
        homepage: 'https://eslint.org',
        desc: '可组装的、用于 JavaScript 和 JSX 的代码检查工具',
        icon: 'https://eslint.org/favicon.ico',
        repository: 'https://github.com/eslint/eslint',
        stars: 21273,
        pushTime: 1663350464000,
        crawlTime: 1663353948491,
        mirrors: [],
      },
      {
        name: 'StyleLint',
        homepage: 'https://stylelint.io',
        desc: '强大的现代 CSS 检测工具，帮助样式表遵循一致的约定和避免错误',
        icon: 'https://stylelint.io/img/favicon.ico',
        repository: 'https://github.com/stylelint/stylelint',
        mirrors: ['https://stylelint.bootcss.com/', 'https://stylelint.docschina.org/'],
        stars: 9879,
        pushTime: 1663294107000,
        crawlTime: 1663353949897,
      },
      {
        name: 'Standard JS',
        homepage: 'https://standardjs.com',
        desc: 'JavaScript 风格指南、检查工具和格式化工具',
        icon: 'https://standardjs.com/favicon.ico',
        repository: 'https://github.com/standard/standard',
        stars: 27443,
        pushTime: 1662984447000,
        crawlTime: 1663353953005,
        mirrors: [],
      },
    ],
  },
  {
    name: '编译构建',
    list: [
      {
        name: 'webpack',
        homepage: 'https://webpack.js.org',
        desc: '用于现代 JavaScript 应用程序的静态模块打包工具',
        icon: 'https://webpack.js.org/favicon.f326220248556af65f41.ico',
        repository: 'https://github.com/webpack/webpack',
        mirrors: ['https://www.webpackjs.com/', 'https://webpack.docschina.org/'],
        stars: 61789,
        pushTime: 1663337724000,
        crawlTime: 1663353954733,
      },
      {
        name: 'Babel',
        homepage: 'https://babel.dev',
        desc: '一个编译工具，让你可以项目中直接使用下一代 JavaScript',
        icon: 'https://babel.dev/img/favicon.png',
        repository: 'https://github.com/babel/babel',
        mirrors: ['https://babeljs.io/', 'https://www.babeljs.cn/', 'https://babel.docschina.org/'],
        stars: 41369,
        pushTime: 1663322373000,
        crawlTime: 1663353957191,
      },
      {
        name: 'Parcel',
        homepage: 'https://parceljs.org',
        desc: '零配置打包工具',
        icon: 'https://parceljs.org/favicon.fe6f9d11.ico',
        repository: 'https://github.com/parcel-bundler/parcel',
        mirrors: ['https://www.parceljs.cn/', 'https://parceljs.docschina.org/'],
        stars: 41305,
        pushTime: 1663349573000,
        crawlTime: 1663353959035,
      },
      {
        name: 'Rollup',
        homepage: 'https://rollupjs.org',
        desc: '新一代 JavaScript 模块打包器',
        icon: '',
        repository: 'https://github.com/rollup/rollup',
        mirrors: ['https://rollup.docschina.org/'],
        stars: 22178,
        pushTime: 1662967577000,
        crawlTime: 1663353960701,
      },
      {
        name: 'Vite',
        homepage: 'http://vitejs.dev',
        desc: '下一代前端开发与构建工具',
        icon: '',
        repository: 'https://github.com/vitejs/vite',
        stars: 47501,
        pushTime: 1663353085000,
        crawlTime: 1663353962811,
        mirrors: [],
      },
      {
        name: 'TypeScript',
        homepage: 'https://zhongsp.gitbooks.io/typescript-handbook/',
        repository: 'https://github.com/zhongsp/TypeScript',
        desc: 'JavaScript 超集',
        icon: 'https://zhongsp.gitbooks.io/typescript-handbook/gitbook/images/apple-touch-icon-precomposed-152.png',
        stars: 6088,
        pushTime: 1660975345000,
        crawlTime: 1663353964253,
        mirrors: [],
      },
      {
        name: 'Gulp',
        homepage: 'https://gulpjs.com',
        desc: '基于流的自动化构建工具',
        icon: 'https://gulpjs.com/img/favicon.png',
        repository: 'https://github.com/gulpjs/gulp',
        mirrors: ['https://www.gulpjs.com.cn/'],
        stars: 32622,
        pushTime: 1661907039000,
        crawlTime: 1663353969476,
      },
      {
        name: 'Grunt',
        homepage: 'http://gruntjs.com/',
        desc: 'JavaScript 世界的构建工具',
        icon: 'http://gruntjs.com/img/favicons/apple-touch-icon.png',
        repository: 'https://github.com/gruntjs/grunt',
        mirrors: ['https://grunt.docschina.org/'],
        stars: 12174,
        pushTime: 1652184386000,
        crawlTime: 1663353972858,
      },
      {
        name: 'Lerna',
        homepage: 'https://lerna.js.org',
        repository: 'https://github.com/lerna/lerna',
        desc: '用于管理有多个包的 JavaScript 项目的工具',
        icon: 'https://lerna.js.org/images/favicon.ico',
        stars: 33560,
        pushTime: 1663206884000,
        crawlTime: 1663353977159,
        mirrors: [],
      },
    ],
  },
  {
    name: 'API',
    list: [
      {
        name: 'GraphQL',
        homepage: 'http://graphql.org/graphql-js/',
        desc: '一种用于 API 的查询语言',
        icon: 'http://graphql.org/favicon.ico',
        repository: 'https://github.com/graphql/graphql-js',
        stars: 19040,
        pushTime: 1663234677000,
        crawlTime: 1663353980127,
        mirrors: [],
      },
      {
        name: 'OpenAPI',
        homepage: 'https://openapis.org',
        desc: 'OpenAPI 规范为 RESTful API 定义了一个与语言无关的标准接口',
        icon: 'https://openapis.org/favicon.ico',
        repository: 'https://github.com/OAI/OpenAPI-Specification',
        stars: 24983,
        pushTime: 1663014686000,
        crawlTime: 1663353982587,
        mirrors: [],
      },
    ],
  },
  {
    name: '测试工具',
    list: [
      {
        name: 'Jest',
        homepage: 'https://jestjs.io',
        repository: 'https://github.com/facebook/jest',
        desc: 'Facebook 开发的零配置测试平台，让代码库更加稳定和健壮',
        icon: 'https://jestjs.io/img/favicon/favicon.ico',
        stars: 40153,
        pushTime: 1663353354000,
        crawlTime: 1663353992212,
        mirrors: [],
      },
      {
        name: 'ava',
        homepage: 'https://github.com/avajs/ava-docs/blob/main/zh_CN/readme.md',
        desc: '未来的测试运行器',
        icon: '',
        repository: 'https://github.com/avajs/ava',
        stars: 19979,
        pushTime: 1662370415000,
        crawlTime: 1663354001836,
        mirrors: [],
      },
      {
        name: 'Karma',
        homepage: 'http://karma-runner.github.io',
        repository: 'https://github.com/karma-runner/karma',
        desc: 'Karma 的主要目标是，让测试驱动开发(TDD)变得简单、快速和有趣。',
        icon: '',
        stars: 11747,
        pushTime: 1663069850000,
        crawlTime: 1663354002348,
        mirrors: [],
      },
      {
        name: 'Mocha',
        homepage: 'https://mochajs.org',
        repository: 'https://github.com/mochajs/mocha',
        desc: 'Mocha 是运行在 Node.js 和浏览器上的功能丰富的 JavaScript 测试框架，使异步测试变得简单而有趣。Mocha 串行运行测试，提供灵活精准的报告，同时将未捕获的异常映射到正确的测试用例。',
        icon: 'https://mochajs.org/favicon.ico',
        stars: 21643,
        pushTime: 1663157651000,
        crawlTime: 1663354002860,
        mirrors: [],
      },
      {
        name: 'Jasmine',
        homepage: 'http://jasmine.github.io/',
        repository: 'https://github.com/jasmine/jasmine',
        desc: 'Jasmine 是一个用于测试 JavaScript 代码的行为驱动开发(BDD)框架',
        icon: '',
        stars: 15436,
        pushTime: 1662233920000,
        crawlTime: 1663354004604,
        mirrors: [],
      },
      {
        name: 'Puppeteer',
        homepage: 'https://pptr.dev',
        repository: 'https://github.com/GoogleChrome/puppeteer',
        desc: 'Puppeteer 可以通过 DevTools 协议控制 headless Chrome 或 Chromium',
        icon: 'https://pptr.dev/img/favicon.ico',
        stars: 79939,
        pushTime: 1663341325000,
        crawlTime: 1663354005625,
        mirrors: [],
      },
      {
        name: 'Sinon.JS',
        homepage: 'https://sinonjs.org/',
        repository: 'https://github.com/sinonjs/sinon',
        desc: '用于对 JavaScript 隔离测试 spy, stub 和 mock。适用于任何单元测试框架',
        icon: 'https://sinonjs.org/assets/images/favicon.png',
        stars: 9090,
        pushTime: 1661436629000,
        crawlTime: 1663354010585,
        mirrors: [],
      },
      {
        name: 'Chai',
        homepage: 'https://chaijs.github.io',
        repository: 'https://github.com/chaijs/chai',
        desc: 'Chai 是一个用于 Node.js 和浏览器的 BDD/TDD 断言库，可以与任何 JavaScript 测试框架便捷配对',
        icon: '',
        stars: 7693,
        pushTime: 1655846003000,
        crawlTime: 1663354015250,
        mirrors: [],
      },
    ],
  },
  {
    name: 'Mock',
    list: [
      {
        name: 'Mock.js',
        homepage: 'http://mockjs.com',
        repository: 'https://github.com/nuysoft/Mock',
        desc: '生成随机数据，拦截 Ajax 请求',
        icon: 'http://mockjs.com/assets/img/logo-2.svg',
        stars: 18368,
        pushTime: 1662427577000,
        crawlTime: 1663354015763,
        mirrors: [],
      },
      {
        name: 'faker',
        homepage: 'https://fakerjs.dev',
        repository: 'https://github.com/faker-js/faker',
        desc: '同时支持浏览器和 node.js 的假数据生成工具',
        icon: 'https://fakerjs.dev/logo.svg',
        stars: 7397,
        pushTime: 1663271548000,
        crawlTime: 1663354018015,
        mirrors: [],
      },
    ],
  },
];

module.exports = { portalGroups };
