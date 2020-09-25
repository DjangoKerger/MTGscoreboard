import React, { useState } from 'react';

function Diceroll(){

    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);

    function handleClick(){
        const p1Roll = Math.floor(Math.random()*20);
        if (p1Roll === 0) {
            setP1(1); 
        }else {
        setP1(p1Roll)};
        
        const p2Roll = Math.floor(Math.random()*20);
        if (p2Roll === 0) {
            setP2(1); 
        }else{
        setP2(p2Roll)};
        
    }

    return (
        <div>
            <h2>{p1}</h2>
            <h2>{p2}</h2>
            <button
                onClick = {handleClick}
            >Roll</button>  

         </div>)
}

export default Diceroll;