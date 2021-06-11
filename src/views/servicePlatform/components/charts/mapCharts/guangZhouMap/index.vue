<template>
  <div id="mapChart"></div>
</template>
<script>
import { Chart } from '@antv/g2';
import GeoJSON from './guangzhou.json';
import DataSet from '@antv/data-set';
export default {
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
        container: document.getElementById('mapChart'),
        forceFit: true,
        height: 616,
        padding: [ 0 ]
      });
      chart.scale({
        latitude: { sync: true },
        longitude: { sync: true }
      });
      chart.tooltip({
        useHtml:true,
        htmlContent:function(title,items) {
          let container = '<div class="my-tooltip"><ul class="my-tooltip-list">'
          items.forEach((item, index) => {
            if (index === 0) {
              container += `<li style="color:#fff;">` + '<p>' + item.value + '</p>' + `</li>`;
            } else {
              container += '<li><p>' +
                '<span>设备数</span>' +
                '<span>' + item.value + '</span>' +
                '<span>台</span>' +
                `</p></li>`;
            }
          });
          container += '</ul></div>';
          return container;
        }
      })
      // 绘制广州地图背景
      const ds = new DataSet();
      const guangZhouMap = ds.createView('back')
        .source(GeoJSON, {
          type: 'GeoJSON'
        })
      const guangZhouMapView = chart.view();
      guangZhouMapView.source(guangZhouMap);
      guangZhouMapView.tooltip(false);
      guangZhouMapView.axis(false);
      guangZhouMapView.polygon()
        .position('longitude*latitude')
        .label('name', {
          offset: 0,
        })
        .style({
          stroke: '#fff',
          lineWidth: 1,
        })
      // 地图数据映射
      const userView = chart.view();
      const userDv = ds.createView()
        .source(this.dataSource)
        .transform({
          type: 'rename',
          map: {
            cityName: 'name',
            tai: 'value',
          }
        }).transform({
          geoDataView: guangZhouMap,
          field: 'name',
          type: 'geo.region',
          as: [ 'longitude', 'latitude' ]
        })
      userView.source(userDv);
      userView.axis(false);
      const interval = userView.polygon()
        .position('longitude*latitude')
        .color('value', '#3F6CA1-#113F7D')
        .tooltip('name*value')
      chart.render();
    }
  }
};
</script>

<style lang="scss">
  div#mapChart {
    .my-tooltip {
      width: 241px !important;
      height: 137px !important;
      padding: 30px !important;
      box-sizing: border-box !important;
      background-image: url('./tooltip.png') !important;
      background-color: unset !important;
      color: #000 !important;
      opacity: 0.8 !important;
      transition: top 200ms, left 200ms !important;
      visibility: visible !important;
      position: absolute !important;
      box-shadow: unset !important;
      top: 0 !important;
      left: 0 !important;
    }
    .my-tooltip-list {
      font-size: 18px;
      li {
        span:nth-child(1) {
          font-size: 14px;
          color: #00fee5;
          padding-right: 20px;
        }
        span:nth-child(2) {
          font-size: 36px;
          color: #00fee5;
        }
        span:nth-child(3) {
          font-size: 14px;
          color: #00fee5;
          padding-left: 20px;
        }
      }
    }
  }
</style>
