<template>
<div class="footerMusic">
    <div class="footerLeft" @click="updateDetailShow">
        <img :src="playList[playListIndex].al.picUrl" alt="">
        <div class="footer">
            <p>{{ playList[playListIndex].name }}</p>
            <span>横滑切换歌曲</span>
        </div>
    </div>
    <div class="footerRight">
        <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
            <use xlink:href="#icon-bofanganniu"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="play" v-else>
          <use xlink:href="#icon-weibiaoti--"></use>  
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zu"></use>
        </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${ playList[playListIndex].id }.mp3`"></audio>
    <van-popup v-model:show="detailShow" position="right" :style="{height: '100%', width: '100%'}">
        <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow"></MusicDetail>
    </van-popup>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { onMounted } from 'vue'
import MusicDetail from '@/components/item/MusicDetail.vue';
export default {
    data(){
        return{ 
            interVal: 0,
        };
    },
    setup() {

    }, 
    computed:{
        ...mapState(['playList','playListIndex','isbtnShow','detailShow']),
    },
    mounted() {
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
        this.updateTime()
    },
    updated() {
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
    },
    methods:{
        play: function(){
            if(this.$refs.audio.paused){
                this.$refs.audio.play();
                this.updateIsbtnShow(false);
                this.updateTime()               // 播放时传值
            } else {
                this.$refs.audio.pause();
                this.updateIsbtnShow(true);
                clearInterval(this.interVal); // 暂停时清楚定时器
            }

        },
        showw: function(){
            console.log(this.playList)
        },

        //  传递当前时间
        updateTime: function(){
            this.interVal = setInterval(()=>{
                this.updateCurrentTime(this.$refs.audio.currentTime)
            },1000)
        },
        ...mapMutations(["updateIsbtnShow","updateDetailShow","updateCurrentTime"])
    },
    watch:{
        // 监听下标变化
        playListIndex: function(){
            this.$refs.audio.autoplay=true;
            if(this.$refs.audio.paused){
                this.updateIsbtnShow(false);
            }
        },
        playList: function(){
            if (this.isbtnShow) {
                this.$refs.audio.autoplay = true;
                this.updateIsbtnShow(false);
            }
        }
    },
    components: {
        MusicDetail,
    }
    

}
</script>
<style lang="less" scoped>

.footerMusic{
    width: 100%;
    height: 1.4rem;
    background-color:#fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: .2rem;
    justify-content: space-between;
    .footerLeft{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }
    .footerRight{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
            width: .6rem;
            height: .6rem;
        }
    }
}

</style>