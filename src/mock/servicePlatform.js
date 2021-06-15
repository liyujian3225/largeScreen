import Mock from 'mockjs';

Mock.mock('/MobileIntelligenceController/TotalTransaction', {
  'result': {
    "result|3": [{
      "typename": '@ctitle(4)',
      "typestatistics": 1000000,
      "percent": 33,
    }]
  }
})
Mock.mock('/MobileIntelligenceController/TodayTransaction', {
  'result': {
    "result|3": [{
      "typename": '@ctitle(4)',
      "typestatistics": 1000000,
      "percent": 33,
    }]
  }
})
Mock.mock('/MobileIntelligenceController/getCity', {
  'result': {
    "result": [
      {"cityName":"湛江市","tai":10},
      {"cityName":"韶关市","tai":9},
      {"cityName":"清远市","tai":8},
      {"cityName":"河源市","tai":7},
      {"cityName":"梅州市","tai":6},
      {"cityName":"潮州市","tai":5},
      {"cityName":"汕头市","tai":4},
      {"cityName":"揭阳市","tai":3},
      {"cityName":"汕尾市","tai":2},
      {"cityName":"惠州市","tai":1},
      {"cityName":"深圳市","tai":0},
      {"cityName":"东莞市","tai":1},
      {"cityName":"广州市","tai":2},
      {"cityName":"佛山市","tai":3},
      {"cityName":"中山市","tai":4},
      {"cityName":"珠海市","tai":5},
      {"cityName":"江门市","tai":6},
      {"cityName":"肇庆市","tai":7},
      {"cityName":"茂名市","tai":8},
      {"cityName":"云浮市","tai":9},
      {"cityName":"阳江市","tai":0},
    ]
  }
})
Mock.mock('/MobileIntelligenceController/TotalPercentage', {
  'result': {
    "result": [
      {
        typename: '个人开卡',
        percent: 33.65
      },
      {
        typename: '对公开户',
        percent: 74.89
      }
    ]
  }
})
Mock.mock('/MobileIntelligenceController/Percentage', {
  'result': {
    "result": [
      {
        typename: '柜台开卡',
        typestatistics: 20,
        percent: 0.2,
      },
      {
        typename: '柜台开户',
        typestatistics: 50,
        percent: 0.5,
      },
      {
        typename: '在线',
        typestatistics: 30,
        percent: 0.3,
      }
    ]
  }
})
Mock.mock('/MobileIntelligenceController/Trend', {
  'result': {
    "result": {
      open: [
        {"name":"开卡申请","country":"PAD","time":"20210127","value":156},
        {"name":"开卡申请","country":"PAD","time":"20210428","value":965},
        {"name":"开卡申请","country":"PAD","time":"20210429","value":356},
        {"name":"开卡申请","country":"PAD","time":"20210430","value":85},
        {"name":"开卡申请","country":"PAD","time":"20210501","value":5},
        {"name":"开卡申请","country":"PAD","time":"20210502","value":456},
        {"name":"开卡申请","country":"PAD","time":"20210503","value":952},
        {"name":"开卡申请","country":"PAD","time":"20210504","value":856},
        {"name":"开卡申请","country":"PAD","time":"20210505","value":5},
        {"name":"开卡申请","country":"PAD","time":"20210506","value":29},
        {"name":"开卡申请","country":"PAD","time":"20210507","value":59},
        {"name":"开卡申请","country":"PAD","time":"20210508","value":71},
        {"name":"开卡申请","country":"PAD","time":"20210509","value":65},
        {"name":"开卡申请","country":"PAD","time":"20210510","value":1},
        {"name":"开卡申请","country":"PAD","time":"20210511","value":8},
        {"name":"开卡申请","country":"PAD","time":"20210512","value":68},
        {"name":"开卡申请","country":"PAD","time":"20210513","value":55},
        {"name":"开卡申请","country":"PAD","time":"20210514","value":81},
      ],
      card: [
        {"name":"开户申请","country":"PAD","time":"20210427","value":69},
        {"name":"开户申请","country":"PAD","time":"20210428","value":11},
        {"name":"开户申请","country":"PAD","time":"20210429","value":21},
        {"name":"开户申请","country":"PAD","time":"20210430","value":54},
        {"name":"开户申请","country":"PAD","time":"20210501","value":46},
        {"name":"开户申请","country":"PAD","time":"20210502","value":37},
        {"name":"开户申请","country":"PAD","time":"20210503","value":3},
        {"name":"开户申请","country":"PAD","time":"20210504","value":23},{"name":"开户申请","country":"PAD","time":"20210505","value":0},{"name":"开户申请","country":"PAD","time":"20210506","value":99},{"name":"开户申请","country":"PAD","time":"20210507","value":44},{"name":"开户申请","country":"PAD","time":"20210508","value":18},{"name":"开户申请","country":"PAD","time":"20210509","value":23},{"name":"开户申请","country":"PAD","time":"20210510","value":27},{"name":"开户申请","country":"PAD","time":"20210511","value":50},{"name":"开户申请","country":"PAD","time":"20210512","value":12},{"name":"开户申请","country":"PAD","time":"20210513","value":40},{"name":"开户申请","country":"PAD","time":"20210514","value":7},{"name":"开户申请","country":"PAD","time":"20210515","value":75},{"name":"开户申请","country":"PAD","time":"20210516","value":68},{"name":"开户申请","country":"PAD","time":"20210517","value":9},{"name":"开户申请","country":"PAD","time":"20210518","value":88},{"name":"开户申请","country":"PAD","time":"20210519","value":85},{"name":"开户申请","country":"PAD","time":"20210520","value":35},{"name":"开户申请","country":"PAD","time":"20210521","value":51},{"name":"开户申请","country":"PAD","time":"20210522","value":19},{"name":"开户申请","country":"PAD","time":"20210523","value":40},{"name":"开户申请","country":"PAD","time":"20210524","value":72},{"name":"开户申请","country":"PAD","time":"20210525","value":20},{"name":"开户申请","country":"PAD","time":"20210526","value":37},{"name":"开户申请","country":"PAD","time":"20210527","value":87},{"name":"开户申请","country":"CNT","time":"20210427","value":5},{"name":"开户申请","country":"CNT","time":"20210428","value":80},{"name":"开户申请","country":"CNT","time":"20210429","value":47},{"name":"开户申请","country":"CNT","time":"20210430","value":44},{"name":"开户申请","country":"CNT","time":"20210501","value":71},{"name":"开户申请","country":"CNT","time":"20210502","value":32},{"name":"开户申请","country":"CNT","time":"20210503","value":59},{"name":"开户申请","country":"CNT","time":"20210504","value":35},{"name":"开户申请","country":"CNT","time":"20210505","value":86},{"name":"开户申请","country":"CNT","time":"20210506","value":50},{"name":"开户申请","country":"CNT","time":"20210507","value":35},{"name":"开户申请","country":"CNT","time":"20210508","value":75},{"name":"开户申请","country":"CNT","time":"20210509","value":26},{"name":"开户申请","country":"CNT","time":"20210510","value":26},{"name":"开户申请","country":"CNT","time":"20210511","value":4},{"name":"开户申请","country":"CNT","time":"20210512","value":91},{"name":"开户申请","country":"CNT","time":"20210513","value":54},{"name":"开户申请","country":"CNT","time":"20210514","value":53},{"name":"开户申请","country":"CNT","time":"20210515","value":30},{"name":"开户申请","country":"CNT","time":"20210516","value":99},{"name":"开户申请","country":"CNT","time":"20210517","value":75},{"name":"开户申请","country":"CNT","time":"20210518","value":32},{"name":"开户申请","country":"CNT","time":"20210519","value":67},{"name":"开户申请","country":"CNT","time":"20210520","value":9},{"name":"开户申请","country":"CNT","time":"20210521","value":71},{"name":"开户申请","country":"CNT","time":"20210522","value":84},{"name":"开户申请","country":"CNT","time":"20210523","value":41},{"name":"开户申请","country":"CNT","time":"20210524","value":68},{"name":"开户申请","country":"CNT","time":"20210525","value":77},{"name":"开户申请","country":"CNT","time":"20210526","value":80},{"name":"开户申请","country":"CNT","time":"20210527","value":70}
      ]
    }
  }
})
Mock.mock('/MobileIntelligenceController/EquipmentIndex', {
  'result': {
    "result": {
      violation: 265,
      registered: 146,
      logout: 99,
      violationEvent: 86
    }
  }
})
Mock.mock('/MobileIntelligenceController/TheBottom', {
  'result': {
    "result": [
      {"transtype":"对公开户","operater":"01085","customer":"惠州市惠阳区聚美商贸有限公司","result":"0","createtime":"2021-05-27 15:56:38","organization":"801011","customermanager":null,"consumetime":"4.93"},
      {"transtype":"个人开卡","operater":null,"customer":null,"result":null,"createtime":"2021-05-27 15:40:45","organization":null,"customermanager":null,"consumetime":null},
      {"transtype":"对公开户","operater":null,"customer":null,"result":null,"createtime":"2021-05-27 15:21:15","organization":null,"customermanager":null,"consumetime":null},
      {"transtype":"密码管理","operater":null,"customer":null,"result":null,"createtime":"2021-05-27 15:19:21","organization":null,"customermanager":null,"consumetime":null}]
  }
})
