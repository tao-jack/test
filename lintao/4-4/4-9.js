/*
 * @Author: your name
 * @Date: 2022-04-09 11:51:11
 * @LastEditTime: 2022-04-09 12:16:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \4-4\4-9.js
 */
// /*
//  * @Author: your name
//  * @Date: 2022-04-09 11:51:11
//  * @LastEditTime: 2022-04-09 11:56:20
//  * @LastEditors: Please set LastEditors
//  * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  * @FilePath: \4-4\4-9.js
//  */
// var test = {
//   a: 5,
//   b: 6,
//   sum: function (a, b) {
//     var self = this;

//     function getA() {
//       return self.a;
//     }

//     function getB() {
//       return self.b;
//     }
//     console.log(a);
//     console.log(b);
//     return getA() + getB();
//   }
// }
// var obj = {
//   a: 2,
//   b: 3
// };
// console.log(test.sum.call(obj, 4, 5)); // 调用时self = this = obj，console.log顺序4,5,5
// console.log(test.sum.apply(obj, [6, 7])); // 调用时self = this = obj，console.log顺序6,7,5
// var sum = test.sum.bind(obj, 8); // 此处返回一个只有一个参数的函数sum（b）
// console.log(sum(9)); // 调用时self = this = obj，console.log顺序8,9,5

// var name = "The Window";

var object = {
  name: 'My Object',

  getNameFunc: function () {
    var that = this
    return function () {
      console.log(this, '!!!!')
      return that.name
    }
  },
}

console.log(object.getNameFunc()())
