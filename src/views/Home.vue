<template>
  <div class="home">
    <CustomList :title="titleParent" :books="booksParent">
      <template v-slot:title="{ titleSlot }">
        <img :src="require('../assets/list.png')" alt="logo" />
        <span>{{ titleSlot }}</span>
      </template>
      <template v-slot:item="{ itemSlot }">
        <img :src="itemSlot.icon" alt="" />
        <span>{{ itemSlot.name }}</span>
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
      titleParent: '书籍列表',
      booksParent: [
        { name: 'Dom编程艺术', icon: require('../assets/people.png') },
        { name: '你不知道的Javascript', icon: require('../assets/love.png') },
        { name: 'CSS世界', icon: require('../assets/clock.png') },
        { name: 'HTML入门教程', icon: require('../assets/star.png') }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
