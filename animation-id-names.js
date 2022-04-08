import fetch from "node-fetch"
fetch('https://www.roblox.com/item-thumbnails?params=[{assetId:1}]')
.then(res => res.json())
.then(json => {
    console.log(json[0].id, json[0].name,);
})
