<template>
<div>
    <div class="itemMusicTop">
        <img :src="playList.coverImgUrl" alt="" class="bgimg" />
        <div class="itemLeft">
            <svg class="icon" aria-hidden="true" @click="r">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
    </div>

    <div class="itemMusicTopContent">
        <div class="contentLeft">
            <img :src="playList.coverImgUrl" alt="" />
            <div class="palyCount">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gl-play-copy"></use>
                </svg>
                <span>{{ countFormater(playList.playCount) }}</span>
            </div>
        </div>
        <div class="contentRight">
            <p class="rightP_one">{{ playList.name }}</p>
            <div class="right_img">
                <img :src="playList.creator.backgroundUrl" alt="" />
                <span>{{ playList.creator.nickname }}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youjiantou"></use>
                </svg>
            </div>
            <p class="rightP_two">
                <span>{{ playList.description }}</span>
                <svg t="1654924110707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1489" data-spm-anchor-id="a313x.7781069.0.i0" width="32" height="32"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="1490"></path></svg>
            </p>
        </div>
    </div>

    <div class="itemMusicFooter">
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
            </svg>
            <span>{{ playList.commentCount }}</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>{{ playList.shareCount }}</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
            </svg>
            <span>下载</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-show_duoxuan"></use>
            </svg>
            <span>多选</span>
        </div>
    </div>
 </div>   
</template>
<script>
export default {
    setup(props) {
        //console.log(props)
        if ((props.playList.creator = "")) {
            props.playList.creator = JSON.parse(sessionStorage.getItem().playlist).creator;
        }

        function countFormater (number) {
            if (number >= 100000000) {
                return (number / 100000000).toFixed(1) + "亿";
            } else if (number >= 10000) {
                return (number / 10000).toFixed(1) + "万";
            }
        }
        return { countFormater }
    },
    props: ["playList", "subscribedCount"],
};
</script>

<style lang="less" scoped>

.itemMusicTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    .itemLeft,
    .itemRight {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0.2rem;
        .span {
        font-size: 0.4rem;
        color: #fff;
        }
        .icon {
        fill: #fff;
        }
    }
    .bgimg {
        width: 100%;
        height: 11rem;
        position: absolute;
        z-index: -1;
        filter: blur(30px);
    }
}
.itemMusicTopContent{
    width: 100%;
    height: 3rem;
    padding: 0.2rem;
    margin-top: 0.4rem;
    display: flex;
    justify-content: space-between;
    .contentLeft {
        width: 36%;
        height: 2.6rem;
        position: relative;

        img {
            width: 2.6rem;
            height: 2.6rem;
            border-radius: 0.2rem;
            position: absolute;
            z-index: -1;
        }
        .palyCount {
            position: absolute;
            right: 0.1rem;
            margin-top: 0.1rem;
            .icon {
                width: 0.26rem;
                height: 0.26rem;
                margin-top: -0.02rem;
                vertical-align: middle;
            }
            span {
                font-size: 0.26rem;
                color: #fff;
            }
        }
    }
    .contentRight {
        width: 60%;
        height: 2.6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .rightP_one {
            font-size: 0.3rem;
            font-weight: 900;
            color: #fff;
            font-family: "微软雅黑";
        }
        .right_img {
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            color: #ccc;
            img {
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                vertical-align: middle;
            }
            span {
                margin-left: 0.1rem;
            }
            .icon {
                width: 0.26rem;
                height: 0.26rem;
                margin-top: -0.08rem;
                vertical-align: middle;
            }
        }
        .rightP_two {
            width: 100%;
            height: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                display: inline-block;
                width: 95%;
                height: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 0.24rem;
                color: #ccc;
            }
            .icon {
                width: 0.24rem;
                height: 0.24rem;
            }
        }
    }
}
.itemMusicFooter{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    margin-top: .2rem;
    .footerItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        .icon{
            fill: #fff;
        }
        span{
            margin-top: .1rem;
        }
    }
}
</style>
