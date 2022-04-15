// 深拷贝函数封装
const obj = {
  name: '林涛',
  age: 42,
  caree: '前端学院',
  info: {
    filed: ['jS', 'CSS', 'HTML'],
    framework: ['React', 'Vue', 'Angular'],
    student: [{
        name: '上三',
        age: 10
      },
      {
        name: '李四',
        age: 20
      },
    ]
  },
  hobby: ['Pinao', 'travel']
}
var newObj = deepclone(obj);

console.log(newObj);
console.log(obj === newObj);

var arr = [{
    name: '张三',
    age: 18
  },
  {
    name: '李四',
    age: 21
  },
  {
    name: '王五',
    age: 35
  },
  {
    name: '孙六',
    age: 48
  },
]

// arr.forEach(function (item, index, arr) {
//   console.log(this);
//   console.log(item, index, arr);
// })

arr.myForEach(function (item, index, arr) {
  console.log(this.name);
  console.log(item, index, arr);
})