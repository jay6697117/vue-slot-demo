<template>
  <div class="demo">$store.state.callObj: {{ $store.state.callObj }}</div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    highLevelFn(num) {
      return () => {
        this.$store.commit('setCallObj', { a: Date.now() + '-' + num, b: num });
      };
    }
  },
  computed: {
    // ...mapState(['callObj'])
  },
  mounted() {
    // setTimeout(() => {
    //   console.log('setTimeout run');
    //   this.$store.commit('setCallObj', { a: Date.now() + '-1', b: 2 });
    // }, 50);
    // setTimeout(() => {
    //   console.log('setTimeout run');
    //   this.$store.commit('setCallObj', { a: Date.now() + '-2', b: 2 });
    // }, 50);
    // setTimeout(() => {
    //   console.log('setTimeout run');
    //   this.$store.commit('setCallObj', { a: Date.now() + '-3', b: 2 });
    // }, 50);

    // setInterval(() => {
    //   console.log('setTimeout run');
    //   this.$store.commit('setCallObj',{a:1,b:2})
    // }, 50);

    // this.$store.commit('setCallObj', { a: Date.now() + '-1', b: 2 });
    // this.$store.commit('setCallObj', { a: Date.now() + '-2', b: 2 });
    // this.$store.commit('setCallObj', { a: Date.now() + '-3', b: 2 });

    // this.highLevelFn(1)();
    // this.highLevelFn(2)();
    // this.highLevelFn(3)();

    (async () => {
      await this.$store.dispatch('setCallObjAsync', { a: Date.now() + '-1', b: 1 });
      await this.$store.dispatch('setCallObjAsync', { a: Date.now() + '-2', b: 2 });
      await this.$store.dispatch('setCallObjAsync', { a: Date.now() + '-3', b: 3 });
    })()


  },
  watch: {
    // callObj: {
    //   handler(newVal) {
    //     console.log('$store.state.callObj newVal', newVal);
    //   },
    //   // immediate: true,
    //   deep: true
    // }
    '$store.state.callObj': {
      handler(newVal) {
        console.log('$store.state.callObj newVal', newVal);
      },
      // immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
