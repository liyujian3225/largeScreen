import Mock from 'mockjs';

Mock.mock('/intelligencePlatform/systemDetection?cycleTime=1', {
  'result': {
    "result": {
      "corpMntNum": 1002920,              // 监控交易量
      "corpRiskNum": 2993,                // 预警交易数量
      "corpRiskP": "0.29%",                // 预警交易占比
      "custMutNum": 39920,                // 监控客户数量
      "ruleOlCnt": 500,                   // 上线规则总数
      "ruleTrigNum": 28,                  // 触发规则数量
      "scenemMntNum": 23,                 // 监控业务场景数
      "workflowOlCnt": 8                  // 上线决策流总数

    }
  }
})
Mock.mock('/intelligencePlatform/riskWarning?type=1&cycleTime=1', {
  'result': {
    "result": [
      {
        time: '2021-06-10T10:00:00.000+0000',
        cropNum: 500 ,
        cropNumP: 0.0
      },
      {
        time: '2021-06-10T11:00:00.000+0000',
        cropNum: 120 ,
        cropNumP: 0.0
      },
      {
        time: '2021-06-10T12:00:00.000+0000',
        cropNum: 80 ,
        cropNumP: 0.0
      },
      {
        time: '2021-06-10T13:00:00.000+0000',
        cropNum: 360 ,
        cropNumP: 0.0
      },
      {
        time: '2021-06-10T14:00:00.000+0000',
        cropNum: 177 ,
        cropNumP: 0.0
      },
      {
        time: '2021-06-10T15:00:00.000+0000',
        cropNum: 293 ,
        cropNumP: 0.0
      },
      {
        time: '2021-06-10T16:00:00.000+0000',
        cropNum: 456 ,
        cropNumP: 0.0
      },
      {
        time: '2021-06-10T17:00:00.000+0000',
        cropNum: 300 ,
        cropNumP: 0.0
      },
      {
        time: '2021-06-10T18:00:00.000+0000',
        cropNum: 500 ,
        cropNumP: 0.0
      },
    ]
  }
})
Mock.mock('/intelligencePlatform/riskControl?type=1&cycleTime=1', {
  'result': {
    "result": [
      {
        time: '2021-05-25 01:00:00',
        cropNum: 1000000 ,
        cropNumP: 8.34
      },
      {
        time: '2021-05-25 02:00:00',
        cropNum: 120 ,
        cropNumP: 20.34
      },
      {
        time: '2021-05-25 03:00:00',
        cropNum: 80 ,
        cropNumP: 13.34
      },
      {
        time: '2021-05-25 04:00:00',
        cropNum: 360 ,
        cropNumP: 48.34
      },
      {
        time: '2021-05-25 05:00:00',
        cropNum: 177 ,
        cropNumP: 68.34
      },
      {
        time: '2021-05-25 06:00:00',
        cropNum: 293 ,
        cropNumP: '98.34%'
      },
      {
        time: '2021-05-25 07:00:00',
        cropNum: 456 ,
        cropNumP: '8.34%'
      },
      {
        time: '2021-05-25 08:00:00',
        cropNum: 300 ,
        cropNumP: 18.34
      },
      {
        time: '2021-05-25 09:00:00',
        cropNum: 500 ,
        cropNumP: '68.34%'
      },
    ]
  }
})
Mock.mock('/intelligencePlatform/riskWarningProportion?cycleTime=1', {
  'result': {
    "result": [
      {
        "riskLevel": "高风险", // 预警等级
        "riskLevelCnt": 20, // 预警数量
        "riskCnt": 20,//预警总数
        "riskLevelPercent": "20%"// 预警等级占比
      },
      {
        "riskLevel": "中风险", // 预警等级
        "riskLevelCnt": 50, // 预警数量
        "riskCnt": 50,//预警总数
        "riskLevelPercent": "50%"// 预警等级占比
      },
      {
        "riskLevel": "低风险", // 预警等级
        "riskLevelCnt": 30, // 预警数量
        "riskCnt": 30,//预警总数
        "riskLevelPercent": "30%"// 预警等级占比
      }
    ]
  }
})
Mock.mock('/intelligencePlatform/eye?cycleTime=1', {
  'result': {
    "result": {
      "ruleOlNum": 128,               // 上线事中规则
      "ruleTrigNum": 3,               // 触发规则数量

      "cropMntNum": 2941866,            // 监控交易量
      "cardMntNum": 22570,            // 监控银行卡数量
      "cropRiskNum": 610,             // 预警交易量
      "cropRiskP": "1.45%",           // 预警交易占比
      "cardRiskNum": 220,             // 预警银行卡数量
      "cardRiskP": "0.97%",           // 预警银行卡占比

      "cropBlockNum": 40,             // 阻断交易量
      "cropBlockP": "0.10%",          // 阻断交易占比
      "cropReleaseNum": 41196,        // 放行交易量
      "cropReleaseP": "97.88%",       // 放行交易占比
      "validEnhanNum": 244,           // 增强验证量
      "validEnhanP": "0.58%"          // 增强验证占比
    }
  }
})
Mock.mock('/intelligencePlatform/printRite?cycleTime=1', {
  'result': {
    "result": {
      "monitorCnt": 128, // 上线规则总数
      "riskCnt": 28,// 触发规则数量
      "flowDecision": 6, // 事中决策流
      "levelModel": 4, // 评级模型

      "monitorOpenCnt": 89, // 监测开户数 开户环节
      "successOpenCnt": 80, // 成功开户次数 开户环节
      "errorOpenCnt": 9, // 失败开户次数 开户环节
      "riskOpenCnt": 1, // 预警开户数 开户环节
      "riskOpenPercent": "1.12%", // 预警占比 开户环节

      "monitorAccountCnt": 102252, // 监测账户数 使用环节
      "riskAccountCnt": 118, // 预警账户数 使用环节
      "riskAccountPercent": "1.14%", // 预警占比 使用环节

      "monitorDelCnt": 12, // 监测账户数 销户环节
      "riskDelCnt": 0, // 预警账户数 销户环节
      "riskDelPercent": "0%" // 预警占比 销户环节
    }
  }
})
Mock.mock('/intelligencePlatform/sincerity?cycleTime=1', {
  'result': {
    "result": {
      "ruleOlCnt": 220,                   // 上线规则总数
      "ruleCnt": 3,                       // 触发规则总数
      "workflowCreditCnt": 6,             // 信贷决策流数
      "decisionCnt": 1320,                // 决策次数

      "eventEntCnt": 120,                 // 进件数
      "eventEntPassP": "100.0",           // 拒绝进件量
      "eventEntRefuseCnt": 0,             // 通过率
    }
  }
})
Mock.mock('/intelligencePlatform/balance?cycleTime=1', {
  'result': {
    "result": {
      "ruleOlCnt": 73,                    // 上线规则总数
      "ruleCnt": 0,                       // 触发规则总数
      "workflowCreditCnt": 2,              // 信贷决策流数
      "decisionCnt": 40,                  // 决策次数

      "eventEntCnt": 20,                  // 进件数
      "eventEntPassP": "100.0",           // 拒绝进件量
      "eventEntRefuseCnt": 0,             // 通过率
    }
  }
})
