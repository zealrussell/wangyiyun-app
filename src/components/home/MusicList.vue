<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" :show-indicators="false" class="musicSwiper">
        <van-swipe-item v-for="music in state.musicList" :key="music">
          <router-link :to="{path:'/itemMusic', query:{id:music.id}}" >
            <img :src="music.picUrl" alt="" />
            <span class="listCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gl-play-copy"></use>
              </svg>
              {{ countFormater(music.playCount) }}
            </span>
            <span class="listName">{{ music.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home.js";
import { reactive,onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      musicList: [],
    });

    function countFormater(number) {
      if (number >= 100000000) {
        return (number / 100000000).toFixed(1) + "亿";
      } else if (number >= 10000) {
        return (number / 10000).toFixed(1) + "万";
      }
    }

    onMounted(async () => {
      let res = await getMusicList();
      state.musicList = res.data.result;
    });
    return { state, countFormater };
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: bold;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;
    .van-swipe-item {
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
      }
      .listCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .listName {
        bottom: 0px;
      }
    }
  }
}
</style>
