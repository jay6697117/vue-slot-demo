<template>
  <div class="wrap">
    <div class="title">
      <slot name="title" :titleSlot="titleCtd">书籍列表默认标题</slot>
    </div>
    <hr />
    <div class="content">
      <div class="content-item" v-for="(item, index) in books" :key="Date.now() + '-' + index">
        <slot name="item" :iconSlot="item.icon" :nameSlot="`【${item.name}】`"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    //标题
    title: {
      type: String,
      default: ''
    },
    //书籍列表
    books: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    titleCtd() {
      return `【${this.title}】`;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 30px 20px 30px 60px;
  background-color: #eee;

  .title {
    padding-bottom: 10px;
    color: blue;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .content {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    > .content-item {
      padding-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }

    .content-item:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
