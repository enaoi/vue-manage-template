<template>
  <el-tooltip v-if="title" class="item" effect="dark" :content="title" placement="top">
    <svg class="svg-icon" :title="title">
      <use :xlink:href="iconName" />
    </svg>
  </el-tooltip>
  <svg v-else class="svg-icon" :title="title">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: "SvgIcon",
  props: {
    type: {
      required: true,
      type: String
    },
    title: {
      type: String
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.type}`;
    }
  }
};
</script>
<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
