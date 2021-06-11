<template>
  <div id="levelBarChart"></div>
</template>
<script>
import { Chart } from '@antv/g2';
const imageMap = {
  '2': require(`./one.png`),
  '1': require(`./two.png`),
  '0': require(`./three.png`),
}
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
        container: document.getElementById('levelBarChart'),
        forceFit: true,
        height: 154,
        padding: [10, 80, 0, 90]
      });
      chart.source(this.dataSource, {
        typestatistics: {
          nice: false,
          alias: '交易量'
        }
      });
      chart.axis('typename', {
        label: {
          offset: 100,
          htmlTemplate: (name, item, index) => {
            return '<div style="height: 15px; width: 120px; line-height: 15px">' +
                '<img style="height: 15px; width: 21px; margin-right: 5px; vertical-align: middle;" src="' + imageMap[index] + '" width="30px"/>' +
                '<span style="color: #fff; font-size: 16px;">' + name + '</span></div>';
          }
        },
        tickLine: {
          alignWithLabel: false,
          length: 0
        },
        line: {
          lineWidth: 0
        }
      });
      chart.axis('typestatistics', {
        label: null,
        title: {
          offset: 30,
          textStyle: {
            fontSize: 12,
            fontWeight: 300
          }
        },
        grid: false
      });
      chart.legend(false);
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
      chart.coord().transpose();
      chart.interval()
        .shape('react')
        .style({
          fill: '#069DFD',
        })
        .position('typename*typestatistics')
        .size(12)
        .label('typestatistics', {
          textStyle: {
            fontSize: 16,
            fill: '#fff',
          }
        })
      chart.render();
    }
  }
};
</script>

<style scoped lang="scss">

</style>
