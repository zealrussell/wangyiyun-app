import service from ".."

export function getMusicItemList(id){
    return service({
        method: "GET",
        url:`/playlist/detail?id=${id}`
    })
}

export function getItemList(id){
    return service({
        method: "GET",
        url: `playlist/track/all?id=${id}&limit=10&offset=1`
    })
}

export function getMusicLyric(data){
    return service({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}