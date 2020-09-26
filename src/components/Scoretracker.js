import React, { useState } from 'react';

function Scoretracker() {

    const [p1Score, setP1Score] = useState(20);
    const [p2Score, setP2Score] = useState(20);

    function handleClickPlus5(){
        setP1Score(p1Score + 5)
    }
    function handleClickPlus1(){
        setP1Score(p1Score + 1)
    }
    function handleClickMinus1(){
        setP1Score(p1Score - 1)
    }

    function handleClickMinus5(){
        console.log("clicked")
        setP1Score(p1Score - 5)
    }

    return(<div>
    <h2 class = "scoreheader">Score</h2>
    <div>
    <span> P1 </span>
        <div>
        
            <button
                name="p1plus1"
                onClick={handleClickPlus1}>+1</button>
            <button 
                name="p1plus5" 
                onClick={handleClickPlus5}>+5</button>
        </div>
        <div>
            <button
                name="p1minus1"
                onClick={handleClickMinus1}>-1</button>
            <button
                name="p1minus5"
                onClick={handleClickMinus5}>-5</button>
        </div>
        <div className="score">
            {p1Score}
        </div>
        <span> P2 </span>
        <div>
            <button>+1</button>
            <button>+5</button>
        </div>
        <div>    
            <button>-1</button>
            <button>-5</button> 
        </div>
        <div className="score">
            {p2Score}
        </div>


    </div>
    </div>
    )
    }    

export default Scoretracker;