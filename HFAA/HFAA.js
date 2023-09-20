import vue from 'vue'

export var save = window.localStorage;

{
    let global_data = save.getItem('HFAA') || false;
    if (global_data) {
        // Load pre-existing game data
        let saveState = JSON.parse(LZString.decompressFromUTF16(global_data));

        if (saveState){
            global = saveState;
        }
        else {
            newGameData();
        }
    }
    else {
        newGameData();
    }
}

setInterval(function() {save.setItem('HFAA',LZString.compressToUTF16(JSON.stringify(global)));}, 1000);


function newGameData(){
    global["count"] = 0;
}




const app = Vue.createApp({
  data() {
    return {
      count: 1
    }
  }
})

app.mount('#app')