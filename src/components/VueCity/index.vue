<template>
  <div class="city">
    <div class="city-tittle">
      <div class="current">当前城市: {{ currenCity.city || '---' }}</div>
      <div class="position">
        定位城市:
        <span style="color: #ec4155">{{ currenCity.city || '---' }}</span>
      </div>
    </div>
    <div class="city-divider"></div>
    <div class="city-content">
      <div class="city-item" v-for="(item, index) in cityList" :key="index">
        <div class="sort-letter" :ref="item.w">{{ item.w }}</div>
        <div class="sort-item">
          <div class="sort-name" v-for="(item, index) in item.option" :key="index" @click="clickCity(item)">
            <span class="sort-name-text">{{ item.c }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const cityList = require('./city.js').citys;
export default {
  name: 'vue-city',
  props: {},
  data: function () {
    return {
      currenCity: {},
      cityList: cityList,
      chars: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ]
    };
  },

  created() {},
  mounted() {},
  methods: {
    clickCity(city) {
      const tempCity = { city: city.c };
      this.$emit('changeCity', tempCity);
      this.currenCity = tempCity;
    }
  }
};
</script>

<style lang="scss" scoped>
.city {
  margin: 0 auto;
  width: 800px;
  height: 568px;
  overflow: auto;
  background: #ffffff;

  .city-tittle {
    padding: 28px 0 16px 38px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .current {
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
      line-height: 22px;
    }

    .position {
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
      line-height: 22px;
    }
  }

  .city-divider {
    width: 100%;
    height: 8px;
    background: #f1f2f4;
  }

  .city-content {
    width: 100%;
    padding: 28px 0 28px 56px;
    .city-item {
      // margin-bottom: 30px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      .sort-letter {
        width: 11px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 22px;
      }
      .sort-item {
        padding: 0 56px;
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;

        .sort-name {
          margin-bottom: 28px;
          width: calc(100% / 6);
          height: 20px;
          line-height: 20px;
          text-align: center;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;

          .sort-name-text {
            width: 80px;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
