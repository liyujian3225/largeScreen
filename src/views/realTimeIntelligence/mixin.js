export default {
  data() {
    return {
      attentionData: [
        {
          img: require(`@/assets/realTimeIntelligence/tianyan.png`),
          name: '天眼',
          data: {},
          renderData: [
            {
              title: '',
              data: [
                'ruleOlNum',
                'ruleTrigNum',
              ]
            },
            {
              title: '预警情况',
              data: [
                "cropMntNum",
                "cardMntNum",
                "cropRiskNum",
                "cropRiskP",
                "cardRiskNum",
                "cardRiskP",
              ]
            },
            {
              title: '事中决策情况',
              data: [
                "cropBlockNum",
                "cropBlockP",
                "cropReleaseNum",
                "cropReleaseP",
                "validEnhanNum",
                "validEnhanP",
              ]
            },
          ]
        },
        {
          img: require(`@/assets/realTimeIntelligence/tianwei.png`),
          name: '天威',
          data: {},
          renderData: [
            {
              title: '',
              data: [
                "monitorCnt",
                "riskCnt",
                "flowDecision",
                "levelModel",
              ]
            },
            {
              title: '开户环节',
              data: [
                "monitorOpenCnt",
                "successOpenCnt",
                "errorOpenCnt",
                "riskOpenCnt",
                "riskOpenPercent",
              ]
            },
            {
              title: '使用环节',
              data: [
                "monitorAccountCnt",
                "riskAccountCnt",
                "riskAccountPercent",
              ]
            },
            {
              title: '销户环节',
              data: [
                "monitorDelCnt",
                "riskDelCnt",
                "riskDelPercent",
              ]
            },
          ]
        },
        {
          img: require(`@/assets/realTimeIntelligence/tianchen.png`),
          name: '天诚',
          data: {},
          renderData: [
            {
              title: '',
              data: [
                "ruleOlCnt",
                "ruleCnt",
                "workflowCreditCnt",
                "decisionCnt",
              ]
            },
            {
              title: '决策情况',
              data: [
                "eventEntCnt",
                "eventEntPassP",
                "eventEntRefuseCnt",
              ]
            },
          ]
        },
        {
          img: require(`@/assets/realTimeIntelligence/tianpin.png`),
          name: '天平',
          data: {},
          renderData: [
            {
              title: '',
              data: [
                "ruleOlCnt",
                "ruleCnt",
                "workflowCreditCnt",
                "decisionCnt",
              ]
            },
            {
              title: '决策情况',
              data: [
                "eventEntCnt",
                "eventEntPassP",
                "eventEntRefuseCnt",
              ]
            },
          ]
        },
      ],
      keysMap: {
        ruleOlCnt: '上线规则总数',
        workflowOlCnt: '上线决策流总数',
        ruleTrigNum: '触发规则总数',
        scenemMntNum: '监控业务场景数量',
        corpMntNum: '监控交易量',
        custMutNum: '监控客户数量',
        corpRiskNum: '预警交易数量',
        corpRiskP: '预警交易量占比',

        "ruleOlNum": '上线事中规则',               // 上线事中规则
        "cropMntNum": '监控交易量',            // 监控交易量
        "cardMntNum": '监控银行卡数',            // 监控银行卡数量
        "cropRiskNum": '预警交易量',             // 预警交易量
        "cropRiskP": "预警交易占比",           // 预警交易占比
        "cardRiskNum": '预警银行卡数量',             // 预警银行卡数量
        "cardRiskP": "预警银行卡占比",           // 预警银行卡占比
        "cropBlockNum": '阻断交易量',             // 阻断交易量
        "cropBlockP": "阻断交易占比",          // 阻断交易占比
        "cropReleaseNum": '放行交易量',        // 放行交易量
        "cropReleaseP": "放行交易占比",       // 放行交易占比
        "validEnhanNum": '增强验证量',           // 增强验证量
        "validEnhanP": "增强验证占比",          // 增强验证占比

        "monitorCnt": '上线规则总数', // 上线规则总数
        "riskCnt": '触发规则数量',// 触发规则数量
        "flowDecision": '事中决策流', // 事中决策流
        "levelModel": '评级模型', // 评级模型
        "monitorOpenCnt": '监测开户数', // 监测开户数 开户环节
        "successOpenCnt": '成功开户次数', // 成功开户次数 开户环节
        "errorOpenCnt": '失败开户次数', // 失败开户次数 开户环节
        "riskOpenCnt": '预警开户数', // 预警开户数 开户环节
        "riskOpenPercent": "预警占比", // 预警占比 开户环节
        "monitorAccountCnt": '监测账户数', // 监测账户数 使用环节
        "riskAccountCnt": '预警账户数', // 预警账户数 使用环节
        "riskAccountPercent": "预警占比", // 预警占比 使用环节
        "monitorDelCnt": '监测账户数', // 监测账户数 销户环节
        "riskDelCnt": '预警账户数', // 预警账户数 销户环节
        "riskDelPercent": "预警占比", // 预警占比 销户环节
        "ruleCnt": '触发规则总数',                       // 触发规则总数
        "workflowCreditCnt": '信贷决策流数',             // 信贷决策流数
        "decisionCnt": '决策次数',                // 决策次数
        "eventEntCnt": '进件量',                 // 进件数
        "eventEntPassP": '通过率',           // 拒绝进件量
        "eventEntRefuseCnt": "拒绝进件量",            // 通过率
      },
      cycleTimeOption: [
        {
          value: '1',
          label: '当天'
        },
        {
          value: '7',
          label: '近7天'
        },
        {
          value: '30',
          label: '近30天'
        },
      ],
      warningTrendTypeOption: [
        {
          value: '1',
          label: '预警交易量及占比趋势'
        },
        {
          value: '2',
          label: '预警客户量及占比趋势'
        },
        {
          value: '3',
          label: '预警银行卡数量及占比趋势'
        },
      ],
      controlTrendTypeOption: [
        {
          value: '1',
          label: '阻断交易及占比'
        },
        {
          value: '2',
          label: '放行交易及占比'
        },
      ]
    }
  }
}
