import React from "react";
import { connect } from "react-redux";


function SongDetail({ mySelectedSong }) {  // deconstructed props into just song
    
    if(!mySelectedSong){
        return (<div>Select a song</div>);
    }
     return (
            <div>
            <h1>{mySelectedSong.title}</h1>
            </div>
    );
}

function mapStateToProps(state){
    console.log(state.selectedSong);
    return {mySelectedSong: state.selectedSong}; //state.(reducer) we want to utilize
}

export default connect(mapStateToProps)(SongDetail);