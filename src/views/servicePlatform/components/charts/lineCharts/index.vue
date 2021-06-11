<template>
  <div :id="id"></div>
</template>
<script>
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import moment from 'moment'
export default {
  name: 'index',
  props: {
    id: {
      type:String,
      default () {
        return '';
      },
      required: true
    },
    height: {
      type: Number,
      default () {
        return 290;
      }
    },
    dataSource: {
      type: Array,
      default () {
        return [];
      }
    },
  },
  data () {
    return {};
  },
  mounted () {
    this.renderChart();
  },
  methods: {
    renderChart: function () {
      const ds = new DataSet();
      const dv =ds.createView().source(this.dataSource);
      dv.transform({
        type: 'map',
        callback(row) {
          row.time = moment(row.time, 'YYYYMMDD').format();
          row[row.country] = row.value;
          return row;
        }
      })
      dv.transform({
        type: 'pick',
        fields: ['PAD', 'CNT', 'time']
      })
      dv.transform({
        type: 'fold',
        fields: [ 'PAD', 'CNT' ], // 展开字段集
        key: 'type', // key字段
        value: 'value' // value字段
      });
      dv.transform({
        type: 'filter',
        callback(row) { // 判断某一行是否保留，默认返回true
          return row.value;
        }
      });
      const chart = new Chart({
        container: document.getElementById(this.id),
        forceFit: true,
        height: this.height,
        padding: [20, 20, 70, 40]
      });
      chart.source(dv, {
        time: {
          type: 'time',
          nice: false,
          mask: 'MM-DD',
          range: [ 0.05, 0.95 ],
        },
      });
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      });
      chart.axis('time', {
        label: {
          textStyle: {
            fill: '#fff',
            fontSize: '16'
          }
        },
        grid: {
          type: 'line',
          lineStyle: {
            stroke: '#061A3F',
            opacity: 0.3
          }
        }
      });
      chart.axis('value', {
        label: {
          textStyle: {
            textAlign: 'end',
            fill: '#fff',
            fontSize: '16'
          }
        },
        grid: {
          type: 'line',
          lineStyle: {
            stroke: '#061A3F',
            hideFirstLine: true,
            hideLastLine: true,
            opacity: 0.3
          }
        }
      });
      chart.legend('type', {
        position: 'bottom',
        textStyle: {
          fill: '#fff',
          fontSize: '16'
        },
        itemFormatter: (name => {
          return name === 'CNT' ? '柜台' : '平板';
        })
      });
      chart.tooltip({
        useHtml: true,
        containerTpl: '<div class="g2-tooltip">'
            + '<div class="g2-tooltip-title" style="margin-bottom: 4px"></div>'
            + '<ul class="g2-tooltip-list"></ul>'
            + '</div>',
        itemTpl: '<li data-index={index}>'
            + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
            + '{name}<span class="g2-tooltip-value">{value}</span>'
            + '</li>',
        'g2-tooltip': {
          opacity: 0.8,
          background: '#0D1B2A'
        },
        'g2-tooltip-title': {
          color: '#fff'
        },
        'g2-tooltip-list-item': {
          color: '#fff'
        },
        'g2-tooltip-value': {
          color: '#fff'
        }
      });
      chart
        .line()
        .position('time*value')
        .color('type')
        .shape('smooth')
        .tooltip('type*value', (type, value) => {
          return {
            name: type === 'CNT' ? '柜台' : '平板',
            value: value
          }
        })
      chart.render();
    }
  }
};
</script>

<style scoped>

</style>
