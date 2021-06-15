<template>
  <div :id="id"></div>
</template>
<script>
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import moment from 'moment';
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
    return {
      chart: null
    };
  },
  mounted () {
    this.renderChart();
  },
  methods: {
    renderChart: function () {
      const ds = new DataSet();
      const dv =ds.createView().source(this.dataSource);
      const chart = new Chart({
        container: document.getElementById(this.id),
        forceFit: true,
        height: this.height,
        padding: [20, 20, 30, 50]
      });
      chart.source(dv, {
        time: {
          type: 'timeCat',
          range: [ 0.05, 0.95 ],
          formatter: function(value) {
            return moment(value).format('MM-DD HH:mm');
          }
        },
        count: {
          alias: '交易量',
        },
        percent: {
          alias: '占比',
        }
      });
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      });
      chart.axis('time', {
        label: {
          textStyle: {
            fill: '#fff'
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
      chart.axis('count', {
        label: {
          textStyle: {
            textAlign: 'end',
            fill: '#17B0F6',
            fontSize: 16
          },
          formatter: val => {
            return val;
          }
        },
        grid: false,
      });
      chart.axis('percent', {
        label: {
          textStyle: {
            textAlign: 'end',
            fill: '#97EB86',
            fontSize: 16
          },
          formatter: val => {
            return val + '%';
          }
        },
        grid: false
      });
      chart.legend(false);
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
      chart.line().position('time*count').color('#18B6FF');
      chart.line().position('time*percent').color('#9AEF88');
      chart.render();
      this.chart = chart;
    },
    changeEchart() {
      this.chart.changeData(this.dataSource)
    }
  },
  watch: {
    dataSource: {
      handler() {
        this.$nextTick(() => {
          this.changeEchart()
        })
      },
      deep: true,
    },
  }
};
</script>

<style scoped>

</style>
