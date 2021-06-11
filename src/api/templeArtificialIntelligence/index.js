/*
 * @Author: LYJ
 * @Date:   2021-05-31
 * @Last Modified by:   LYJ
 * @Describe:
 */

/* 导入axios实例 */
import axios from '../httpAxios';

const templeArtificialIntelligence = {
  getKnowledgeGraph () {
    return axios({
      url: '/miaosuanIntelligence/knowledgeGraph',
      method: 'get',
    });
  },
  getMachineLearning () {
    return axios({
      url: '/miaosuanIntelligence/machineLearning',
      method: 'get',
    });
  },
  getTerminalSituation () {
    return axios({
      url: '/miaosuanIntelligence/terminalSituation',
      method: 'get',
    });
  },
  getBiometrics () {
    return axios({
      url: '/miaosuanIntelligence/biometrics',
      method: 'get',
    });
  },
  getRealtimeIntelligence () {
    return axios({
      url: '/miaosuanIntelligence/realtimeIntelligence',
      method: 'get',
    });
  },
};
export default templeArtificialIntelligence
