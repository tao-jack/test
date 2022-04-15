/**
 * 基于axios 封装的请求模块
 */
import axios from 'axios';

// 创建一个axios示例
// ?通过这个示例去发请求 吧需要的配置给这个示例来
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net' // 请求的基本路径
})

// 导出请求方法
export default request
// 谁要使用 就加载request模块
