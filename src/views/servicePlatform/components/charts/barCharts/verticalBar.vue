<template>
  <div id="barChart"></div>
</template>
<script>
import { Chart } from '@antv/g2';
export default {
  name: 'index',
  props: {
    dataSource: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {

    };
  },
  mounted () {
    this.renderChart();
  },
  methods: {
    renderChart: function () {
      const chart = new Chart({
        container: document.getElementById('barChart'),
        forceFit: true,
        height: 124,
        padding: [20, 10, 30, 50],
      });
      chart.source(this.dataSource, {
        typestatistics: {
          tickCount: 3
        }
      });
      chart.axis('typename', {
        label: {
          textStyle: {
            fill: '#fff',
            fontSize: 16
          }
        },
      });
      chart.axis('typestatistics', {
        title: null,
        type: 'linear',
        tickInterval: 10,
        label: {
          offset: 20,
          textStyle: {
            textAlign: 'center',
            fill: '#0D95E2',
            fontSize: '16'
          }
        },
        grid: {
          type: 'line',
          lineStyle: {
            stroke: '#33628D',
            lineWidth: 2,
            opacity: 0.3,
          }
        }
      });
      chart.tooltip(true, {
        showTitle: false // 默认标题不显示
      });
      chart.legend(false)
      chart.tooltip({
        useHtml: true,
        containerTpl: '<div class="g2-tooltip">'
            + '<div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>'
            + '<ul class="g2-tooltip-list"></ul>'
            + '</div>',
        itemTpl: '<li data-index={index}>'
            + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
            + '交易量<span class="g2-tooltip-value">{value}</span>'
            + '</li>',
        'g2-tooltip': {
          opacity: 0.8,
          width: '150px',
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
      chart.interval()
        .position('typename*typestatistics')
        .size(60)
        .color('typename')
        // .label('typestatistics', {
        //   useHtml: true,
        //   htmlTemplate: (text, item) => {
        //     const a = item.point;
        //     return '<span style="font-size: 12px; text-align: center;">' +
        //         '<p style="color: #fff; width: 60px;">' + a.typename + '</p>' +
        //         '<p style="color: #fff">' + a.typestatistics + '</p>' +
        //         '</span></div>';
        //   }
        // });
      chart.render();
    }
  }
};
</script>

<style scoped lang="scss">

</style>
