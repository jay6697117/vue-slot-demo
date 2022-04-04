<template>
  <div>
    <Child v-bind.sync="obj"></Child>
    <!-- <Child :propName.sync="name" :propName1.sync="name1"></Child> -->
    <!-- <Child :propName="name" @update:propName="updateFn" :propName1="name1" @update:propName1="updateFn1"></Child> -->
    <button @click="alertFn">alertFn</button>
    <button @click="changeFn">changeFn</button>
    <!-- <div>父name:{{ name }}</div> -->
    <div>父name:{{ obj.name }}</div>
    <hr />
    <button @click="alertFn1">alertFn1</button>
    <button @click="changeFn1">changeFn1</button>
    <!-- <div>父name:{{ name1 }}</div> -->
    <div>父name:{{ obj.name1 }}</div>
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
      // name: '1',
      // name1: '2',
      obj: { name: '1', name1: '2' }
    };
  },
  created() {
    console.log('this:', this);
    console.log('this.$options.data():', this.$options.data());
  },
  methods: {
    alertFn() {
      // alert(this.name);
      alert(this.obj.name);
    },
    alertFn1() {
      // alert(this.name1);
      alert(this.obj.name1);
    },
    changeFn() {
      // this.name = '111';
      this.obj.name = '111';
    },
    changeFn1() {
      // this.name1 = '222';
      this.obj.name1 = '222';
    },
    // updateFn(val) {
    //   // this.name = val;
    //   this.obj.name = val;
    // },
    // updateFn1(val) {
    //   // this.name1 = val;
    //   this.obj.name1 = val;
    // }
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
