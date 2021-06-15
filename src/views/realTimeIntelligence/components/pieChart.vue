<template>
  <div id="pieChart"></div>
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
    }
  },
  data () {
    return {
      t: null,
      startIndex: 0,
      num: this.dataSource.length,
      chart: null,
      // data: [
      //   { item: '开户申请', count: 60, percent: 0.6 },
      //   { item: '开卡申请', count: 30, percent: 0.6 },
      //   { item: '其它交易', count: 10, percent: 0.1 },
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
            `<span style="color:#fff;font-size:20px">${this.dataSource[this.startIndex].item}</span>` +
            '<br>' +
            `<span style="color:#fff;font-size:20px">${this.dataSource[this.startIndex].count}次</span></div>`,
        alignX: 'middle',
        alignY: 'middle'
      });
      chart.repaint();
    },
    renderChart: function () {
      let that = this;
      const chart = new Chart({
        container: document.getElementById('pieChart'),
        forceFit: true,
        height: 242,
        animate: false,
        padding: [10, 180, 0, 0]
      });
      chart.source(this.dataSource);
      chart.legend({
        position: 'right',
        offsetX: -20,
        offsetY: -70,
        itemMarginBottom: 20,
        textStyle: {
          fill: '#fff',
          fontSize: 18
        },
        itemFormatter: (name) => {
          const percent = this.dataSource.filter(item => {
            return item.item === name
          })[0].percent;
          return name + ' ' + (percent * 100).toFixed(2) + '%' ;
        },
        itemGap: 40
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
          + `占比<span class="g2-tooltip-value">{value}</span>`
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
      chart.coord('theta', {
        radius: 0.95,
        innerRadius: 0.65
      });
      const interval = chart.intervalStack()
        .position('percent')
        .tooltip('item*percent', (item, percent) => {
          return {
            name: item,
            value: (percent * 100).toFixed(2) + '%'
          }
        })
        .color('item', ['red', 'yellow', 'green']).size(18)
        .style({
          lineWidth: 1
        })
      chart.render();
      this.drawGuide(chart, interval)
      this.chart = chart;
    },
    changeEchart() {
      this.chart.changeData(this.dataSource)
    }
  },
  beforeDestroy() {
    clearInterval(this.t)
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
