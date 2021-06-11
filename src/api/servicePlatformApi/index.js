/*
 * @Author: LYJ
 * @Date:   2021-05-31
 * @Last Modified by:   LYJ
 * @Describe: 移动智能监控大屏
 */

/* 导入axios实例 */
import axios from '../httpAxios';

const servicePlatformApi = {
  //业务交易总量
  getTotalBusinessTransactions () {
    return axios({
      url: `/MobileIntelligenceController/TotalTransaction`,
      method: 'get',
    });
  },
  //设备指标
  getDeviceMettics () {
    return axios({
      url: `/MobileIntelligenceController/EquipmentIndex`,
      method: 'get',
    });
  },
  //业务今日交易量
  getBusinessTradingVolume () {
    return axios({
      url: `/MobileIntelligenceController/TodayTransaction`,
      method: 'get',
    });
  },
  //长列表
  getTableData () {
    return axios({
      url: `/MobileIntelligenceController/TheBottom`,
      method: 'get',
    });
  },
  //城市地图设备
  getCityDeviceData () {
    return axios({
      url: `/MobileIntelligenceController/getCity`,
      method: 'get',
    });
  },
  //业务总交易量占比
  getTotalPercentage () {
    return axios({
      url: `/MobileIntelligenceController/TotalPercentage`,
      method: 'get',
    });
  },
  //业务当日交易量占比
  getTodayPercentage () {
    return axios({
      url: `/MobileIntelligenceController/Percentage`,
      method: 'get',
    });
  },
  //业务近30天交易量走势图
  getTrend () {
    return axios({
      url: `/MobileIntelligenceController/Trend`,
      method: 'get',
    });
  },
};
export default servicePlatformApi
