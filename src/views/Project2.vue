<template>
  <div>
    <h1>LightBox</h1>

    <button @click="open()">打開LightBox</button>

    <div class="overlay" v-if="lightBox" @click="close();"></div>
    <div class="lightBox" v-if="lightBox">
      <div class="close" @click="close()"></div>
      <img alt="Vue logo" src="@/assets/logo.png">
      <Hello />
    </div>
  </div>
</template>

<script>
import Hello from '@/components/HelloWorld.vue'
import $ from 'jquery'
export default {
  data() {
    return {
      lightBox: false
    }
  },
  components: {
    Hello
  },
  methods: {
    open() {
      this.lightBox = true
      $('body').css("overflow", 'hidden')
    },
    close() {
      this.lightBox = false
      $('body').removeAttr('style')
    }
  }
}
</script>

<style lang="scss" scoped>
.lightBox {
  position: fixed;
  top: 46%;
  left: 50%;
  transform: translate(-50% ,-50%);
  background: #fff;
  border: 1px solid #f7f7f7;
  box-shadow: 0 0 20px -15px #333;
  padding: 40px 20px 20px;
  opacity: 1;
  &.hidding {
    opacity: 0;
    transform: translate(-40%, -50%);
  }
  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:before {
      content: "";
      width: 15px;
      height: 1px;
      background: #333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
      content: "";
      width: 15px;
      height: 1px;
      background: #333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
}
</style>