import Mock from 'mockjs';

Mock.mock('/miaosuanIntelligence/knowledgeGraph', {
  'result': {
    "result": {
      "personalCustNum":17883214, 		  		//个人客户实体数量
      "bankInsideAccNum":7843695,					//行内账号实体数量
      "bankOutsideAccNum":502449,					//行外账号实体数量
      "deviceFingerNum":265897,					//设备指纹实体数量
      "corporateCustNum":66806,		    		//对公客户实体数量
      "holdRalationNum":7843704,					//持有关系数量
      "transferRalNum":667053,					//转账关系数量
      "loginDevRalNum":122053,					//登录设备关系数量
      "legalRepRalNum":60094,						//法定代表人关系数量
      "sameTelRalNum":4751,						//相同电话号码关系数量
      "proxyRalNum":5								//代理关系关系数量
    }
  }
})

Mock.mock('/miaosuanIntelligence/machineLearning', {
  'result': {
    "result": {
      "antiLauMoneyMod":9145,  				//反洗钱模型
      "unauthorizedTradeMod": 12365,			//盗转盗刷模型
      "antiCollisionAttMod": 1235,			//防批量撞库模型
      "antiCollisionRegMod": 654,				//防批量注册模型
      "orderRiskMod": 564,    				//收单风控模型
      "cardNumDrawTran":51,	 				//卡号提取交易
      "custNumDrawTran":15,					//客户号提取交易
      "iPDrawTran":64,						//IP提取交易
      "fingerprintDrawTran":56				//设备指纹提取交易
    }
  }
})

Mock.mock('/miaosuanIntelligence/terminalSituation', {
  'result': {
    "result": {
      "deviceFingerprint":23,						//设备指纹
      "equipThreatAnalysis":16,					//设备威胁分析
      "equipEnvironAnalysis":45,					//设备环境分析
      "crashAnalysis":654,						//崩溃分析
      "equipOperaAnalysis":561,
    }
  }
})

Mock.mock('/miaosuanIntelligence/biometrics', {
  'result': {
    "result": {
      "credentialsFeatureComp":13924, 			  	//证特征对比
      "doubleCredentialsFeatureComp":4821,			//两证特征对比
      "iDCardOCR":60,                                 //身份证OCR
      "bankCardOCR":10,                               //银行卡OCR
      "businessLicOCR":75,                            //营业执照OCR
      "drivingLicOCR": 5,								//驾驶证OCR
      "householdRegOCR":4,							//户口本OCR
      "propertyCerOCR":2,								//房产证OCR
      "vATBilOCR": 3,									//增值税票据OCR
      "totalDailyTran":15665 						    //每日交易总数
    }
  }
})

Mock.mock('/miaosuanIntelligence/realtimeIntelligence', {
  'result': {
    "result": {
      "skyeyeAntiFraud":13924, 			  			//天眼实时反欺诈
      "printRiteAccMut":4821,							//天威账户监控
      "sincerityCreditDec":15665,						//天诚信贷决策
      "balanceDec":15635								//天平决策
    }
  }
})
