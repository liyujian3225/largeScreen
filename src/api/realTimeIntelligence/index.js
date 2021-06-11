/*
 * @Author: LYJ
 * @Date:   2021-05-31
 * @Last Modified by:   LYJ
 * @Describe: 实时智能平台运行大盘
 */

/* 导入axios实例 */
import axios from '../httpAxios';

const realTimeIntelligenceApi = {
  getRuleData (params) {
    return axios({
      url: `/intelligencePlatform/systemDetection`,
      method: 'get',
      params: params,
    });
  },
  //获取风险预警趋势
  getRiskWarning (params) {
    return axios({
      url: `/intelligencePlatform/riskWarning`,
      method: 'get',
      params: params,
    });
  },
  //获取风险管控趋势
  getRiskControl (params) {
    return axios({
      url: `/intelligencePlatform/riskControl`,
      method: 'get',
      params: params,
    });
  },
  //获取预警风险等级占比
  getRiskWarningProportion (params) {
    return axios({
      url: `/intelligencePlatform/riskWarningProportion`,
      method: 'get',
      params: params,
    });
  },
  //获取天眼数据
  getEye (params) {
    return axios({
      url: `/intelligencePlatform/eye`,
      method: 'get',
      params: params,
    });
  },
  //获取天威数据
  getPrintRite (params) {
    return axios({
      url: `/intelligencePlatform/printRite`,
      method: 'get',
      params: params,
    });
  },
  //获取天诚数据
  getSincerity (params) {
    return axios({
      url: `/intelligencePlatform/sincerity`,
      method: 'get',
      params: params,
    });
  },
  //获取天平数据
  getBalance (params) {
    return axios({
      url: `/intelligencePlatform/balance`,
      method: 'get',
      params: params,
    });
  },
};
export default realTimeIntelligenceApi;
