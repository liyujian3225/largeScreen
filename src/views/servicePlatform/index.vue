<template>
  <div class="servicePlatform">
    <div class="header">
<!--      <div>-->
<!--        <span>星期二</span>-->
<!--        <span>晴天</span>-->
<!--        <span>13℃ ~ 25℃</span>-->
<!--      </div>-->
<!--      <div>-->
<!--        <span>2020年12月16日 12:00:00</span>-->
<!--      </div>-->
    </div>
    <div class="left">
      <div class="top">
        <div class="charts">
          <div class="businessTransaction">
            <custom-title>业务交易总量</custom-title>
            <horizontal-bar
              :dataSource='totalBusinessTransactions'
              v-if="totalBusinessTransactions.length"
            />
          </div>
          <div class="deviceIndicator">
            <custom-title>设备指标</custom-title>
            <div class="attention">
              <span>今日违规设备数</span>
              <span class="violation">{{violation}}</span>
              <span>台</span>
            </div>
            <table-chart
              :dataSource="secondTableData.data"
              :columns="secondTableData.row"
              v-if="secondTableData.data.length"
            />
          </div>
          <div class="tradingVolume">
            <custom-title>业务今日交易量</custom-title>
            <vertical-bar
              :dataSource='businessTradingVolume'
              v-if="businessTradingVolume.length"
            />
          </div>
        </div>
        <div class="map">
          <time-count-up/>
          <guang-zhou-chart
            :dataSource='cityDeviceData'
            v-if="cityDeviceData.length"
          />
        </div>
      </div>
      <div class="bottom">
        <table-chart
          :dataSource="firstTableData.data"
          :columns="firstTableData.row"
          v-if="firstTableData.data.length"
        />
      </div>
    </div>
    <div class="right">
      <div class="totalTradingVolume">
        <custom-title>业务总交易量占比</custom-title>
        <radial-bar-chart
          :data-source="totalPercentage"
          v-if='totalPercentage.length'
        />
      </div>
      <div class="todayTradingVolume">
        <custom-title>业务当日交易量占比</custom-title>
        <pie-chart
          :data-source="percentage"
          v-if='percentage.length'
        />
      </div>
      <div class="trendCharts">
        <custom-title>业务近30天交易量走势图</custom-title>
        <line-chart
          :id="'accountId'"
          :height="290"
          :data-source="accountTrendData"
          v-if='false && accountTrendData.length'
        />
        <line-chart
          :id="'cardId'"
          :height="290"
          :data-source="openCardTrendData"
          v-if="openCardTrendData.length"
        />
      </div>
    </div>
  </div>
</template>
<script>

import HorizontalBar from "./components/charts/barCharts/horizontalBar";
import TableChart from './components/charts/tableCharts';
import VerticalBar from "./components/charts/barCharts/verticalBar";
import GuangZhouChart from './components/charts/mapCharts/guangZhouMap';
import RadialBarChart from './components/charts/radialBarCharts';
import PieChart from './components/charts/pieCharts';
import LineChart from "./components/charts/lineCharts";
import timeCountUp from '../../components/timeCountUp';
import CustomTitle from './components/customTitle'

export default {
  name: 'servicePlatform',
  components: {
    CustomTitle, HorizontalBar, TableChart, VerticalBar, GuangZhouChart, RadialBarChart, PieChart, LineChart, timeCountUp
  },
  data () {
    return {
      totalBusinessTransactions: [],
      violation: 0,
      secondTableData: {
        data: [],
        row: []
      },
      businessTradingVolume: [],
      firstTableData: {
        data: [],
        row: []
      },
      cityDeviceData: [],
      totalPercentage: [],
      percentage: [],
      openCardTrendData: [],
      accountTrendData: []
    };
  },
  methods: {
    // 业务交易总量
    getTotalBusinessTransactions () {
      this.$api.servicePlatformApi.getTotalBusinessTransactions().then(response => {
        const data = response.data.result.result;
        this.totalBusinessTransactions = data;
      });
    },
    // 设备指标
    getDeviceMettics () {
      let that = this;
      this.$api.servicePlatformApi.getDeviceMettics().then(function (response) {
        const { violation, registered, logout, violationEvent } = response.data.result.result;
        that.violation = violation;
        that.secondTableData = {
          data: [
            {
              equipmentName: '注册设备数',
              deviceIndicator: registered
            },
            {
              equipmentName: '违规设备数量',
              deviceIndicator: violation
            },
            {
              equipmentName: '注销设备数',
              deviceIndicator: logout
            },
            {
              equipmentName: '违规事件数',
              deviceIndicator: violationEvent
            }
          ],
          row: [
            {
              name: '设备名称',
              value: 'equipmentName',
              width: 200
            },
            {
              name: '设备指标',
              value: 'deviceIndicator',
              width: 193
            }
          ]
        }
      });
    },
    // 业务今日交易量
    getBusinessTradingVolume () {
      let that = this;
      this.$api.servicePlatformApi.getBusinessTradingVolume().then(function (response) {
        const data = response.data.result.result;
        that.businessTradingVolume = data;
      });
    },
    // 长列表
    getTableData () {
      let that = this;
      this.$api.servicePlatformApi.getTableData().then(function (response) {
        const data = response.data.result.result;
        data.forEach(element => {
          element.result = element.result == '0' ? '正常' : '异常';
        });
        that.firstTableData = {
          data: data,
          row: [
            {
              name: '交易类型',
              value: 'transtype',
              width: 150
            },
            {
              name: '操作柜员',
              value: 'operater',
              width: 150
            },
            {
              name: '客户',
              value: 'customer',
              width: 250
            },
            {
              name: '响应结果',
              value: 'result',
              width: 160
            },
            {
              name: '提交时间',
              value: 'createtime',
              width: 250
            },
            {
              name: '业务归属机构',
              value: 'organization',
              width: 150
            },
            {
              name: '客户经理',
              value: 'customermanager',
              width: 150
            },
            {
              name: '交易耗时',
              value: 'consumetime',
              width: 100
            }
          ]
        }
      });
    },
    // 地图城市设备
    getCityDeviceData () {
      let that =this;
      this.$api.servicePlatformApi.getCityDeviceData().then(function (response) {
        that.cityDeviceData = response.data.result.result;
      });
    },
    // 业务总交易量占比
    getTotalPercentage () {
      let that =this;
      this.$api.servicePlatformApi.getTotalPercentage().then(function (response) {
        let data = response.data.result.result;
        data = data.map(item => {
          return {
            question: item.typename,
            percent: item.percent
          }
        })
        that.totalPercentage = data;
      });
    },
    // 业务当日交易量占比
    getTodayPercentage () {
      let that =this;
      this.$api.servicePlatformApi.getTodayPercentage().then(function (response) {
        let data = response.data.result.result;
        data = data.map(item => {
          return {
            item: item.typename,
            count: item.typestatistics,
            percent: item.percent,
          }
        })
        that.percentage = data;
      });
    },
    // 业务近30天交易量走势图
    getTrend () {
      let that =this;
      this.$api.servicePlatformApi.getTrend().then(function (response) {
        const { card, open } = response.data.result.result;
        that.accountTrendData = open;
        that.openCardTrendData = card;
      });
    },
    init () {
      // 业务交易总量
      this.getTotalBusinessTransactions();
      // 设备指标
      this.getDeviceMettics();
      // 业务今日交易量
      this.getBusinessTradingVolume()
      // 长列表
      this.getTableData();
      // 地图城市设备
      this.getCityDeviceData()
      // 业务近30天交易量走势图
      this.getTrend();
      // 业务总交易量占比
      this.getTotalPercentage()
      // 业务当日交易量占比
      this.getTodayPercentage()
    }
  },
  mounted () {
    this.init()
    this.t = setInterval(() => {
      this.init()
    }, 1000 * 60 * 10)
  },
  beforeDestroy () {
    clearTimeout(this.t)
  },
};
</script>
<style scoped lang="scss">
  @mixin boxBackground($url) {
    background-image: url($url);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .boxContain {
    padding: 18px;
    box-sizing: border-box;
  }
  .attention{
    height: 70px;
    line-height: 70px;
    span:first-child{
      font-size: 16px;
      color: #fff;
    }
    span:nth-child(2){
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #fd301d;
      padding: 0 5px;
    }
    span:last-child{
      font-size: 16px;
      color: #64d1e4;
    }
  }
  div.servicePlatform {
    width: 1920px;
    height: 1080px;
    @include boxBackground("../../assets/servicePlatform/bg.png");
    padding: 0 22px 22px 22px;
    box-sizing: border-box;
    >div.header {
      width: 100%;
      height: 76px;
      line-height: 76px;
      @include boxBackground("../../assets/servicePlatform/hd.png");
      display: flex;
      justify-content: space-between;
      div{
        font-size: 14px;
        color: #fff;
      }
    }
    >div {
      float: left;
      height: 982px;
      &.left {
        width: 1411px;
        >div.top {
          width: 100%;
          height: 746px;
          margin-bottom: 20px;
          div.charts {
            float: left;
            width: 443px;
            height: 100%;
            margin-right: 22px;
            div.businessTransaction {
              width: 100%;
              height: 190px;
              margin-bottom: 20px;
              @include boxBackground("../../assets/servicePlatform/bor1.png");
              @extend .boxContain;
            }
            div.deviceIndicator {
              width: 100%;
              height: 334px;
              margin-bottom: 20px;
              @include boxBackground("../../assets/servicePlatform/bor2.png");
              @extend .boxContain;
            }
            div.tradingVolume {
              width: 100%;
              height: 182px;
              @include boxBackground("../../assets/servicePlatform/bor3.png");
              @extend .boxContain;
            }
          }
          div.map {
            float: left;
            width: 946px;
            height: 100%;
          }
        }
        >div.bottom {
          width: 100%;
          height: 216px;
          @include boxBackground("../../assets/servicePlatform/bor4.png");
          @extend .boxContain;
        }
      }
      &.right {
        width: 445px;
        margin-left: 20px;
        div.totalTradingVolume {
          width: 100%;
          height: 312px;
          margin-bottom: 20px;
          @include boxBackground("../../assets/servicePlatform/bor5.png");
          @extend .boxContain;
        }
        div.todayTradingVolume {
          width: 100%;
          height: 300px;
          margin-bottom: 20px;
          @include boxBackground("../../assets/servicePlatform/bor6.png");
          @extend .boxContain;
        }
        div.trendCharts {
          width: 100%;
          height: 330px;
          @include boxBackground("../../assets/servicePlatform/bor7.png");
          @extend .boxContain;
        }
      }
    }
  }
</style>
