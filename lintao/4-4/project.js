/*
 * @Author: your name
 * @Date: 2022-04-04 12:20:12
 * @LastEditTime: 2022-04-05 18:01:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \4-4\project.js
 */
const indexOn = (arr, key) =>
  arr.reduce((obj, v) => {
    const {
      [key]: id, ...data
    } = v;
    obj[id] = data;
    console.log(id);
    return obj;
  }, {});
const res = indexOn([{
    id: 10,
    name: 'apple'
  },
  {
    id: 20,
    name: 'orange'
  }
], 'id');
console.log(res);