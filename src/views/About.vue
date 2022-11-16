<template>
  <div class="about">
    <!-- <Father /> -->
    <!-- <Demo /> -->
    <vue-city @changeCity="changeCity" />
  </div>
</template>

<script>
// import Demo from '@/components/Demo';
// import Father from '@/components/Father.vue';
import VueCity from '@/components/VueCity';
export default {
  components: {
    // Demo,
    // Father
    VueCity
  },
  data() {
    return {
    };
  },
  methods: {
    changeCity(city) {
      console.log('changeCity city:', city)
    }
  }
};
</script>

<style lang="scss" scoped></style>
