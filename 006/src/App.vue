<template>
  <div>
    <Item :isActive="false">
        Item组件
    </Item>
  </div>
</template>

<script>

import Item from "./components/Item";

export default {
  components: {
    Item,
  }
}
</script>

