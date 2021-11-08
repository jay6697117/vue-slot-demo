<template>
  <div class="cl-wrap">
    <div class="cl-title">
      <slot name="title">书籍默认标题</slot>
    </div>
    <hr />
    <div class="cl-content">
      <slot name="content">书籍列表为空</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cl-wrap {
  .cl-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .cl-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      color: red;
    }
  }
}
</style>
