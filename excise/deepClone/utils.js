// 实现深拷贝  
function deepclone(origin, target) {
  var tar = target || {}
  var toStr = Object.prototype.toString
  var arrType = '[object, Array]'
  for (var k in origin) {
    if (origin.hasOwnProperty[k]) {
      if (typeof origin[k] === 'object' && origin[k] !== null) {
        tar[k] = toStr.call(origin[k] === arrType ? [] : {})
        deepclone(origin[k], tar[k])
      }
    } else {
      tar[k] = origin[k]
    }
  }
  return tar
}

Array.prototype.myForEach = function (cd) {
  var _arr = this;
  var _length = _arr.length;
  var _arg2 = arguments[1] || window;

  for (var i = 0; i < _length; i++) {
    cd.apply(_arg2, [_arr[i], i, _arr])
  }
}