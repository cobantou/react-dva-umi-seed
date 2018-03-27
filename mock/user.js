import Mock from 'mockjs' //http://mockjs.com/

//mockjs
let apiUsers = Mock.mock({
  // 属性data的值是一个数组，其中含有 3 到 5 个元素
  'data|3-5': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    "name": '@name',//mockjs随机生成name
    "username": "Bret",
    "email": "@email",//mockjs随机生成email
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }]
})


export default {
  // 支持值为 Object 和 Array
  // 'GET /mock/api/users': { users: [1,2] },

  //自定义函数，API 参考 express@4
  'GET /mock/api/users'(req,res){
    res.status(200).json(apiUsers.data)
  },
};
