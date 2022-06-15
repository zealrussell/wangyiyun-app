<template>
<div>
    <ItemMusicTop :playList="state.playlist"></ItemMusicTop>
    <ItemMusicList :itemList="state.itemlist" :subscribedCount="state.playlist.subscribedCount"></ItemMusicList>
</div>
</template>
<script>
import { useRoute } from 'vue-router'
import { reactive, onMounted } from 'vue'
import { getMusicItemList, getItemList } from '@/request/api/item.js';

import ItemMusicTop from '@/components/item/ItemMusicTop.vue';
import ItemMusicList from '@/components/item/ItemMusicList.vue'
export default{
    setup() {
        const state = reactive({
            playlist: {},  // 歌单详情页
            itemlist:[]   //歌单的歌曲
        });
        onMounted(async () => {
            let id=useRoute().query.id
            let res = await getMusicItemList(id);
            let result = await getItemList(id)
            
            state.playlist = res.data.playlist
            state.itemlist = result.data.songs
            //console.log(result);
            //console.log(state.playlist)
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        })
        return { state };
    },
    components: {
        ItemMusicTop,
        ItemMusicList
    },
}
</script>
