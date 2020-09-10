import React from "react";
import {connect} from "react-redux";
import { selectSong } from "../actions/index";



function SongList(props) {


   // console.log(props.songs); //gets the array of songs

   function renderList() {
       return props.songs.map((song) => {
           return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => props.selectSong(song)}>  
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
           );
       });
   }

    return(
        
             <div className="ui divided list">
                {renderList()}
                </div>
        
    );
}

function mapStateToProps(state) {
    
    return {songs: state.songs}; //this is my state now (songs)
}

export default connect(mapStateToProps, {   // connect(State, {action creator function})(this.function)
    selectSong: selectSong
})(SongList);