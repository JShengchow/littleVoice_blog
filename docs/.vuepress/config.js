module.exports = {
  title: 'Littlvoce_Blog',  // 设置网站标题
  description : 'Littlvoce_Blog',
  // base : '/v1/adroi-h5/adroiapi/',
  themeConfig : {
    nav : [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
        { text: '关于', link: '/api' },
        { text: '附录：错误码', link: '/error' }
    ],/*
    sidebar: { //侧边栏
        '/' : [
      "/", //指的是根目录的md文件 也就是 README.md 里面的内容
            "apiword",  //根目录创建 apiword.md文件
            "api",      //根目录创建 api.md文件
            "error"     //根目录创建 error.md文件
        ]
    },*/
    sidebarDepth : 2
  }
}