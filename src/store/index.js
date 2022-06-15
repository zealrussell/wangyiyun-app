import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item.js';
export default createStore({
    state: {
        playList: [{
            al: {
                id: 145634204,
                name: "再见无期",
                picUrl: "https://p1.music.126.net/Lx0nKszrEu7D8jtVgtcOuA==/109951167482058699.jpg",
                tns: [],
                pic_str: "109951167482058699",
                pic: 123

            },
            ar: [{
                name: "zeal"
            }],
            id: 1951144114
        }],
        playListIndex: 0,
        isbtnShow: true,
        detailShow: false,
        lyricList:{},
        currentTime: 0,
    },
    getters: {
    
    },
    mutations: {
        updateIsbtnShow: function(state, value){
            state.isbtnShow = value;
        },
        updatePlayList: function(state, value){
            state.playList = value
        },
        updatePlayListIndex: function(state, value){
            state.playListIndex = value;
        },
        updateDetailShow: function(state, value){
            state.detailShow = value;
        },
        updateLyricList: function(state, value){
            state.lyricList = value
        },
        updateCurrentTime: function(state, value){
            state.currentTime = value
        },
    
    },
    actions: {
        getLyric: async function(context, value){
            let res = await getMusicLyric(value)
            context.commit("updateLyricList",res.data.lrc)
        }
    },
    modules: {
    }

})
