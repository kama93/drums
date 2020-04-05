import React from 'react';
import './squere.css'

const Square= (props)=>{
    return(
        <div>
            <button className= "f6 link dim br1 ba bw2 ph3 pv2 mb2 dib near-black" href="#0" 
                    onClick={() => props.music.play()} >
            <h1>{props.letter}</h1> 
            <p>{props.name}</p> 
            </button>
        </div>
        )
};

export default Square