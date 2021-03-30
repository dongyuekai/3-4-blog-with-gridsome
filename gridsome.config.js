// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      // 通过插件可以读取strapi平台的数据（本地需要运行项目在1337端口）  预取数据 供graphql查询
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        // 需要的CollectionTypes的值
        contentTypes: ['projectpost', 'journalpost'],
        // 需要的 SingleTypes的值
        singleTypes: ['forstry'],
      }
    }
  ],
  templates: {
    // StrapiPost是collection的类型
    StrapiProjectpost: [
      {
        path: '/projectposts/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    StrapiJournalpost: [
      {
        path: '/journalposts/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
}
