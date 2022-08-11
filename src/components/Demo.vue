<template>
  <div class="tb-booth" @mouseover="onMouseOver" @mouseout="onMouseOut" @mousemove="onMouseMove" ref="boothRef">
    <div class="mask" ref="mask" v-show="boxShow" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      boothRef: null,
      mask: null,
      boxShow: false
    };
  },
  methods: {
    onMouseOver() {
      this.boxShow = true;
    },
    onMouseOut() {
      this.boxShow = false;
    },
    onMouseMove(e) {
      let x = e.pageX - this.$refs.boothRef.offsetLeft;
      let y = e.pageY - this.$refs.boothRef.offsetTop;
      let maskX = x - this.$refs.mask.offsetWidth / 2;
      let maskY = y - this.$refs.mask.offsetHeight / 2;
      // mask的x最大移动距离
      let maskXMaxMove = this.$refs.boothRef.offsetWidth - this.$refs.mask.offsetWidth;
      let maskYMaxMove = this.$refs.boothRef.offsetHeight - this.$refs.mask.offsetHeight;
      if (maskX <= 0) {
        maskX = 0;
      } else if (maskX >= maskXMaxMove) {
        maskX = maskXMaxMove;
      }
      if (maskY <= 0) {
        maskY = 0;
      } else if (maskY >= maskYMaxMove) {
        maskY = maskYMaxMove;
      }
      this.$refs.mask.style.left = maskX + 'px';
      this.$refs.mask.style.top = maskY + 'px';
    }
  }
};
</script>

<style scoped>
.tb-booth {
  width: 600px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  background-color: rgba(136, 136, 136, 0.6);
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  cursor: move;
}
</style>
