<template>
  <div id="radialBar"></div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  name: 'index',
  props: {
    dataSource: {
      type: Array,
      default: () => {
        return [];
      }
    },
  },
  data () {
    return {
      t: null,
      startIndex: 0,
      num: this.dataSource.length,
      chart: null,
      // data: [
      //   { question: '开户申请', percent: 1.86 },
      //   { question: '开卡申请', percent: 1.53 },
      //   { question: '其它交易', percent: 1.29 }
      // ]
    };
  },
  mounted () {
    this.intervalDrawChart()
  },
  methods: {
    intervalDrawChart: function() {
      this.renderChart();
      this.t = setInterval(() => {
        if(this.startIndex > this.num - 1) {
          this.startIndex = 0;
        }
        this.drawGuide(this.chart)
        this.startIndex++;
      }, 1000 * 5)
    },
    drawGuide: function (chart, interval) {
      chart.guide().clear();
      chart.guide().html({
        position: [ '50%', '50%' ],
        html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">' +
          `<span style="color:#fff;font-size:20px">${this.dataSource[this.startIndex].question}</span>` +
          '<br>' +
          `<span style="color:#fff;font-size:20px">${this.dataSource[this.startIndex].percent}%</span></div>`,
        alignX: 'middle',
        alignY: 'middle',
      });
      chart.repaint();
    },
    renderChart: function () {
      let that = this;
      const chart = new Chart({
        container: document.getElementById('radialBar'),
        forceFit: true,
        height: 272,
        padding: [10, 120, 10, 0]
      });
      const dv = chart.source(this.dataSource, {
        percent: {
          min: 0,
          max: 100, // 指定度量的最大值
          formatter: val => {
            return val + '%';
          }
        }
      });
      chart.legend({
        position: 'right',
        offsetX: -20,
        offsetY: -100,
        itemMarginBottom: 20,
        textStyle: {
          fill: '#fff',
          fontSize: 16
        },
        itemFormatter: function (name, a, b , c ) {
          const percent = that.dataSource.filter(item => {
            return item.question === name;
          })[0].percent;
          return name + ' ' + percent + '%';
        },
      });
      chart.tooltip(true, {
        showTitle: false // 默认标题不显示
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
      })
      chart.coord('polar', {
        innerRadius: 0.5,
      }).transpose();
      const interval = chart.interval()
        .position('question*percent')
        .color('question*percent', (question, percent) => {
          if (question === '个人开卡') {
            return '#1CE3E9';
          } else if (question === '对公开户') {
            return '#6E69F9';
          } else {
            return '#CAC9C9';
          }
        })
        .size(10)
      chart.render();
      this.drawGuide(chart, interval)
      this.chart = chart;
    }
  }
};
</script>

<style scoped>

</style>
