<template>
  <div class="child">
    <input :value="propName" @input="inputFn" type="text" />
    <div>propName:{{ propName }}</div>
  </div>
</template>
<script>
export default {
  props: {
    propName: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    inputFn(e) {
      console.log('input 改变:', e.target.value);
      this.$emit('update:propName', e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.child {
  background-color: skyblue;

  input {
    padding: 2px 4px;
    width: 200px;
  }
}
</style>
