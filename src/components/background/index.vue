<template>
  <canvas
    id="space"
    ref="space"
    width="1920"
    height="1080"
  ></canvas>
</template>
<script>
export default {
  name: 'background',
  data() {
    return {
      canvas: null,
      paint: null,
      focalLength: 0,

      centerX: 0,  //中心点X轴
      centerY: 0,  //中心点Y轴
      numStars: 3000,  //星星总数
      stars: [],

      animate: true,
      star: '',
      i: '',
    }
  },
  mounted() {
    this.canvas = this.$refs.space;
    this.paint = this.canvas.getContext('2d');
    this.focalLength = this.canvas.width * 2;
    this.initializeStars();
    this.executeFrame();
  },
  methods: {
    //初始化星星
    initializeStars() {
      this.centerX = this.canvas.width / 2;
      this.centerY = this.canvas.height / 2;
      for(let i = 0; i < this.numStars; i++){
        this.stars.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          z: Math.random() * this.canvas.width,
          o: '0.' + Math.floor(Math.random() * 99) + 1  //0.881
        });
      }
    },
    //loop动画
    executeFrame() {
      let requestAnimFrame = (function(){return  window.requestAnimationFrame})();
      if(this.animate) {
        requestAnimFrame(this.executeFrame);
        this.moveStars();
        this.drawStars();
      }
    },
    moveStars() {
      for(let i = 0; i < this.numStars; i++){
        let star = this.stars[i];
        star.z--;
        if(star.z <= 0){
          star.z = this.canvas.width;
        }
      }
    },
    drawStars() {
      let pixelX, pixelY, pixelRadius;
      if(this.canvas.width != window.innerWidth || this.canvas.width != window.innerWidth){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.initializeStars();
      }
      this.paint.fillStyle = "rgba(0,10,20,1)";
      this.paint.fillRect(0,0, this.canvas.width, this.canvas.height);
      for(let i = 0; i < this.numStars; i++){
        let star = this.stars[i];
        pixelX = (star.x - this.centerX) * (this.focalLength / star.z);
        pixelX += this.centerX;
        pixelY = (star.y - this.centerY) * (this.focalLength / star.z);
        pixelY += this.centerY;
        pixelRadius = 1 * (this.focalLength / star.z);
        this.paint.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        this.paint.fillStyle = "rgba(209, 255, 255, "+ star.o + ")";
      }
    }
  }
}
</script>
<style>

</style>
