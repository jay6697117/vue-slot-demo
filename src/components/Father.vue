<template>
  <div>
    <Child :propName.sync="name"></Child>
    <!-- <Child :propName="name" @update:propName="updateFn"></Child> -->
    <button @click="alertFn">点击</button>
    <button @click="changeFn">改变</button>
    <div>name:{{ name }}</div>
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  name: 'list',
  components: {
    Child
  },
  data() {
    return {
      name: 'xxx'
    };
  },
  methods: {
    alertFn() {
      alert(this.name);
    },
    changeFn() {
      this.name = '123';
    },
    updateFn(val) {
      this.name = val;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  padding: 2px 10px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
