<template>
  <div>
    <component :is="'Demo'"></component>
  </div>
</template>

<script>
import Demo from '@/components/Demo';

export default {
  components:{
    Demo
  },
  // data() {
  //   return {
  //     Demo
  //     // Demo:()=> import('@/components/Demo')
  //   }
  // },
};
</script>

<style lang="scss" scoped></style>
