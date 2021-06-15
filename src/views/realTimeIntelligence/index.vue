<template>
  <div class="realTimeIntelligence">
    <div class="header">
      <div class="searchDate">
        <select-option
          :options="cycleTimeOption"
          :selected-option="cycleTimeOption[0]"
          :callback="changeCycleTime"
        />
      </div>
    </div>
    <div class="rulesNumber">
      <template v-for="(item, index) in ruleData">
        <rules-boxs
          :data-source="item"
          :num="index"
          :key="index"/>
      </template>
    </div>
    <div class="charts">
      <chart-box>
        <template v-slot:title>风险预警趋势</template>
        <template v-slot:extra>
          <select-option
            :options="warningTrendTypeOption"
            :selected-option="warningTrendTypeOption[0]"
            :callback="changeWarningTrendType"
          />
        </template>
        <template #chart>
          <line-chart
            :id="'cardId'"
            :height="241"
            :data-source="warningTrendData"
            v-if="warningTrendData.length"
          />
        </template>
      </chart-box>

      <chart-box>
        <template #title>风险管控趋势</template>
        <template v-slot:extra>
          <select-option
            :options="controlTrendTypeOption"
            :selected-option="controlTrendTypeOption[0]"
            :callback="changeControlTrendType"
          />
        </template>
        <template #chart>
          <line-chart
            :id="'safe'"
            :height="241"
            :data-source="controlTrendData"
            v-if="controlTrendData.length"
          />
        </template>
      </chart-box>

      <chart-box>
        <template #title>预警风险等级占比</template>
        <template #chart>
          <pie-chart
            :data-source="percentage"
            v-if='percentage.length'
          />
        </template>
      </chart-box>
    </div>
    <div class="attention">
      <template  v-for="(value, index) in attentionData">
        <attention-box :background-image-url="value.img">
          <template #title>{{ value.name }}</template>
          <template #content>
            <template v-for="item in value.renderData">
              <attention-son-box
                :title="item.title"
                :keys-array="item.data"
                :data-source="value.data"
              />
            </template>
          </template>
        </attention-box>
      </template>
    </div>
  </div>
</template>

<script>

import RulesBoxs from '../realTimeIntelligence/components/rulesBox'
import ChartBox from "../realTimeIntelligence/components/chartBox";
import LineChart from './components/lineChart';
import PieChart from './components/pieChart'
import AttentionBox from '../realTimeIntelligence/components/attentionBox';
import AttentionSonBox from '../realTimeIntelligence/components/attentionSonBox';
import SelectOption from './components/selectOption'
import DataSet from '@antv/data-set';
import moment from 'moment';
import mixin from './mixin'

export default {
  name: "index",
  mixins: [ mixin ],
  components: {
    RulesBoxs, ChartBox, AttentionBox, AttentionSonBox, LineChart, PieChart, SelectOption
  },
  data () {
    return {
      warningTrendType: '1',  //预警风险默认类型
      controlTrendType: '1',  //管控风险默认类型
      cycleTime: '1',        //默认时间
      ruleData: [],          //规则数据
      warningTrendData: [],  //风险预警趋势
      controlTrendData: [],  //风险管控趋势
      percentage: [],        //预警风险等级占比
    }
  },
  methods: {
    getRuleData() {
      let params =  {
        cycleTime: this.cycleTime
      };
      this.$api.realTimeIntelligenceApi.getRuleData(params).then(response => {
        const {corpMntNum, corpRiskNum, corpRiskP, custMutNum, ruleOlCnt, ruleTrigNum, scenemMntNum, workflowOlCnt} = response.data.result.result;
        this.ruleData = [
          {
            ruleOlCnt: ruleOlCnt,
            workflowOlCnt: workflowOlCnt,
          },
          {
            ruleTrigNum: ruleTrigNum,
            scenemMntNum: scenemMntNum,
          },
          {
            corpMntNum: corpMntNum,
            custMutNum: custMutNum,
          },
          {
            corpRiskNum: corpRiskNum,
            corpRiskP: corpRiskP,
          }
        ]
      })
    },
    //风险预警趋势
    getWarningTrend () {
      let params = {
        type: this.warningTrendType,
        cycleTime: this.cycleTime
      }
      this.$api.realTimeIntelligenceApi.getRiskWarning(params).then(response => {
        const data = response.data.result.result;
        const ds = new DataSet();
        const dv = ds.createView()
          .source(data)
          .transform({
            type: 'rename',
            map: {
              cropNumP: 'percent',
              cropNum: 'count'
            }
          }).transform({
            type: 'map',
            callback(row) {
              row.time = moment(row.time, 'YYYY-MM-DD hh:mm:ss').format();
              return row;
            }
          }).transform({
            type: 'pick',
            fields: ['percent', 'count', 'time']
          })
        this.warningTrendData = dv.rows;
      })
    },
    //风险管控趋势
    getControlTrend () {
      let params = {
        type: this.controlTrendType,
        cycleTime: this.cycleTime,
      }
      this.$api.realTimeIntelligenceApi.getRiskControl(params).then(response => {
        const data = response.data.result.result;
        const ds = new DataSet();
        const dv = ds.createView()
          .source(data)
          .transform({
            type: 'rename',
            map: {
              cropNumP: 'percent',
              cropNum: 'count'
            }
          }).transform({
            type: 'map',
            callback(row) {
              row.time = moment(row.time, 'YYYY-MM-DD hh:mm:ss').format();
              return row;
            }
          }).transform({
            type: 'pick',
            fields: ['percent', 'count', 'time']
          })
        this.controlTrendData = dv.rows;
      });
    },
    //预警风险等级占比
    getRiskWarningProportion () {
      let params =  {
        cycleTime: this.cycleTime
      };
      this.$api.realTimeIntelligenceApi.getRiskWarningProportion(params).then(response => {
        let data = response.data.result.result;
        const ds = new DataSet();
        const dv = ds.createView()
          .source(data)
          .transform({
            type: 'map',
            callback(row) {
              row.item = row.riskLevel;
              row.count = row.riskLevelCnt;
              row.percent = row.riskLevelPercent;
              return row;
            }
          }).transform({
            type: 'pick',
            fields: [ 'item', 'count' ] // 决定保留哪些字段，如果不传，则返回所有字段
          }).transform({
            type: 'percent',
            field: 'count',           // 统计销量
            dimension: 'item',       // 每年的占比
            as: 'percent'            // 结果存储在 percent 字段
          });
        this.percentage = dv.rows;
      });
    },
    //获取天眼数据
    getEye() {
      let params =  {
        cycleTime: this.cycleTime
      };
      this.$api.realTimeIntelligenceApi.getEye(params).then(response => {
        this.attentionData[0].data = response.data.result.result;
      })
    },
    //获取天威数据
    getPrintRite() {
      let params =  {
        cycleTime: this.cycleTime
      };
      this.$api.realTimeIntelligenceApi.getPrintRite(params).then(response => {
        this.attentionData[1].data = response.data.result.result;
      })
    },
    //获取天诚数据
    getSincerity() {
      let params =  {
        cycleTime: this.cycleTime
      };
      this.$api.realTimeIntelligenceApi.getSincerity(params).then(response => {
        // response.data.result.result.eventEntPassP = response.data.result.result.eventEntPassP + '%';
        this.attentionData[2].data = response.data.result.result;
      })
    },
    //获取天平数据
    getBalance() {
      let params =  {
        cycleTime: this.cycleTime
      };
      this.$api.realTimeIntelligenceApi.getBalance(params).then(response => {
        // response.data.result.result.eventEntPassP = response.data.result.result.eventEntPassP + '%';
        this.attentionData[3].data = response.data.result.result;
      })
    },
    changeCycleTime(value) {
      this.cycleTime = value;
      this.getRuleData();
      this.getWarningTrend()
      this.getControlTrend()
      this.getRiskWarningProportion();
      this.getEye();
      this.getPrintRite();
      this.getSincerity();
      this.getBalance();
    },
    changeWarningTrendType(value) {
      this.warningTrendType = value;
      this.getWarningTrend();
    },
    changeControlTrendType(value) {
      this.controlTrendType = value;
      this.getControlTrend();
    },
  },
  mounted () {
    this.getRuleData();
    this.getWarningTrend()
    this.getControlTrend()
    this.getRiskWarningProportion();
    this.getEye();
    this.getPrintRite();
    this.getSincerity();
    this.getBalance();
  }
}
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
  div.realTimeIntelligence {
    width: 1920px;
    height: 1080px;
    @include boxBackground("../../assets/realTimeIntelligence/bg.png");
    padding: 0 22px 22px 22px;
    box-sizing: border-box;
    div.header {
      height: 104px;
      margin: 0 -22px;
      @include boxBackground("../../assets/realTimeIntelligence/hd.png");
      >div.searchDate {
        float: left;
        margin-top: 22px;
        margin-left: 22px;
      }
    }
    div.rulesNumber {
      height: 145px;
      margin-bottom: 26px;
      display: flex;
      justify-content: space-between;
    }
    div.charts {
      height: 305px;
      margin-bottom: 22px;
      display: flex;
      justify-content: space-between;
    }
    div.attention {
      height: 433px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
