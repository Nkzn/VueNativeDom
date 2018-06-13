<template>
  <view class="container">
    <text class="text-color-primary">
      My Vue Native App!!!!!
    </text>
    <text>{{count}}</text>
    <button v-bind:title="message" v-bind:on-press="handleBtnPress" />
  </view>
</template>

<script>
export default {
  data: {
    message: "Button",
    count: 0
  },
  methods: {
    handleBtnPress: function() {
      this.count++;
    }
  }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>