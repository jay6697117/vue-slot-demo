<template>
  <div class="child">
    <!-- <input :value="propName" @input="inputFn" type="text" />
    <div>子propName:{{ propName }}</div> -->
    <input :value="name" @input="inputFn" type="text" />
    <div>子name:{{ name }}</div>
    <hr />
    <!-- <input :value="propName1" @input="inputFn1" type="text" />
    <div>子propName1:{{ propName1 }}</div> -->
    <input :value="name1" @input="inputFn1" type="text" />
    <div>子name1:{{ name1 }}</div>
  </div>
</template>
<script>
export default {
  props: {
    // propName: {
    //   type: String,
    //   default: '',
    //   required: true
    // },
    // propName1: {
    //   type: String,
    //   default: '',
    //   required: true
    // },
    name: {
      type: String,
      default: '',
      required: true
    },
    name1: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    inputFn(e) {
      console.log('input 改变:', e.target.value);
      // this.$emit('update:propName', e.target.value);
      this.$emit('update:name', e.target.value);
    },
    inputFn1(e) {
      console.log('input 改变 1:', e.target.value);
      // this.$emit('update:propName1', e.target.value);
      this.$emit('update:name1', e.target.value);
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
