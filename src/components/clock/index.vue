<template>
  <div class="clock">
    <canvas
      ref="canvas"
      class='canvas'
      width="1890"
      height="1050"
    >你的浏览器不支持canvas</canvas>
  </div>
</template>
<script>
export default {
  name: 'clock',
  data() {
    return {

    }
  },
  methods: {
    //绘制填充矩形
    //当前渲染上下文中的fillStyle 属性决定了对这个矩形对的填充样式。
    drawRect(x, y, w, h, color) {
      let paint = this.$refs.canvas.getContext('2d');
      paint.beginPath();
      paint.fillStyle = color;
      paint.fillRect(x, y, w, h);
      paint.closePath();
    },
    //绘制填充文本
    //如果第四个参数提供了最大宽度，文本会进行缩放以适应最大宽度。
    drawText(text, x, y, maxWidth, font) {
      let paint = this.$refs.canvas.getContext('2d');
      paint.beginPath();
      paint.font = font;
      paint.textAlign = 'right';
      paint.fillText(text, x, y, maxWidth);
      // paint.strokeText(text, x, y, maxWidth);
      paint.closePath();
    },
    //绘画矩形线条
    drawStrokeRect(x, y, w, h, color, lineWidth) {
      let paint = this.$refs.canvas.getContext('2d');
      paint.beginPath();
      paint.strokeStyle = color;
      paint.lineWidth = lineWidth;
      paint.shadowColor = '#d53';
      //模糊级数
      paint.shadowBlur = 20;
      //两线交汇处: bevel	斜角 || round	圆角 || miter	尖角(默认)
      paint.lineJoin = 'round';
      paint.strokeRect(x, y, w, h);
      paint.closePath();
    },
    //绘画线条
    drawLine(x, y, x1, y1) {
      let paint = this.$refs.canvas.getContext('2d');
      paint.beginPath();
      paint.moveTo(x, y);
      paint.lineTo(x1, y1)
      paint.stroke()
      paint.closePath();
    }
  },
  mounted() {
    const { width, height } = this.$refs.canvas;
    // this.drawRect(0, 0, width, height, '#fff');
    this.drawText('stephenLee', 300, 300, 60, "48px serif");
    this.drawLine(100, 100, 500, 500);
    this.drawStrokeRect(500, 500, 300, 300, 'red', '20');
    console.log('success')
  }
}
</script>
<style lang="scss" scoped>
  div.clock {
    padding: 15px;
    background: #fff;
    .canvas {
      margin: 0 auto;
      border: 1px solid #000;
    }
  }
</style>
