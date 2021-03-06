module.exports = [
  {
    path: '/pages/news/list',
    config: {
      enablePullDownRefresh: true
    }
  },
  {
    path: '/pages/news/detail',
    config: {
      navigationBarTitleText: '文章详情'
    }
  },
  {
    path: '/pages/news/comment',
    config: {
      navigationBarTitleText: '评论列表'
    }
  },
  {
    path: '/pages/quanzi/list',
    config: {
      navigationBarTitleText: '圈子',
      enablePullDownRefresh: true
    }
  },
  {
    path: '/pages/quanzi/detail',
    config: {
      navigationBarTitleText: '圈子详情'
    }
  }
]
