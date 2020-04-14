<template>
  <div class="home">
    <h2>任意拖曳，碰撞檢測</h2>
    <div>
      <div class="div1">div1</div>
      <div class="div2">div2</div> 
    </div> 
  <body>
  <p id="p1" draggable="true" ondragstart="dragstart_handler(event);">This element is draggable.</p>
  </body>
  </div>
</template>

<script>
import $ from 'jquery'
import 'jquery-ui/ui/widgets/droppable'
export default {
  mounted(){
    $(".div2").draggable();
    $(".div1").draggable();
    $(".div1").droppable({
      activeClass:"ui-state-active",
      accept:".div2",
      drop: function() {
        $(this).append($('.div2'))
      }
    })
    $(".div2").droppable({
      activeClass:"ui-state-active",
      accept:".div1",
      drop: function() {
        $(this).append($('.div1'))
      }
    });
  },
  methods: {
    // dragstart_handler(ev) {
    //   console.log("dragStart");
    //   // Add the target element's id to the data transfer object
    //   ev.dataTransfer.setData("text/plain", ev.target.id);
    // }
    dragstart_handler(ev) {
      // Set the drag effect to copy
      // ev.dataTransfer.dropEffect = "copy";
    }
  }
}
</script>

<style lang="scss" scoped>
.div1, .div2 {
  width: 200px;
  height: 100px;
  border: 1px solid #f7f7f7;
  background: #eaeaea;
}

.div1 .div2, .div2 .div1 {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  top: unset !important;
  height: 50px !important;
  transform: translateX(-50%);
  z-index: 999;
}
</style>