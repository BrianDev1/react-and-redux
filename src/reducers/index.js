import { combineReducers } from "redux";


function songsReducer() {

    return [
        {title: "No Scrubs", duration: "4;05"},
        {title: "Macarena", duration: "3:00"},
        {title: "All Star", duration: "3:15"},
        {title: "I want it that way", duration: "1:45"}
    ];

};

function selectSongReducer(selectedSong = null, action) {
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});