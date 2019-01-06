// 引入mockjs
// const Mock = require('mockjs') 或:
import Mock from 'mockjs'
// 使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
  return {
    data: ['a', 'b']
  }
})

export default Mock
