<template>

  <!-- 动态绑定class样式 -->
  <div class="item" :class="{active:isActive}">
      <!-- 插槽 -->
      <slot></slot>
  </div>
</template>

<script>
export default {
    // props: ["isActive"],

    props: {
        isActive:{
            type:Boolean, //约束该属性的类型是boolean
            require:true, //约束该属性必需要传递
            default:false, //默认值
        }
    }

}
</script>

<!-- scoped 解决样式冲突问题 -->
<style scoped>

/* 高、宽由外层元素间接控制  */
.item{
    cursor: pointer;
    widows: 100%;
    height: 100%;
}

.active{
    background: #e7e7e7;
}

.item:hover{
    background: #f4f4f4;
}
</style>