<template>
  <div class="home">
    <CustomList :list="books">
      <template v-slot:title>
        <img src="../assets/list.png" alt="" />
        <span>{{ title }}</span>
      </template>
      <template v-slot:content>
        <div v-for="(item, index) in books" :key="index">{{ item }}</div>
      </template>
    </CustomList>
  </div>
</template>

<script>
import CustomList from '@/components/CustomList.vue';

export default {
  name: 'Home',
  components: {
    CustomList
  },
  data() {
    return {
      title: '书籍列表',
      books: ['Dom编程艺术', '你不知道的Javascript', 'CSS世界', 'HTML入门教程']
    };
  }
};
</script>

<style lang="scss" scoped></style>
