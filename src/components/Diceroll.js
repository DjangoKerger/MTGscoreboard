import React, { useState } from 'react';

function Diceroll(){

    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);

    function handleClick(){
        const p1Roll = Math.floor(Math.random()*20);
        setP1(p1Roll);
        if (p1Roll === 0) {
            p1Roll = 1; 
        };
        const p2Roll = Math.floor(Math.random()*20);
        setP2(p2Roll);
        if (p2Roll === 0) {
            p2Roll = 1; 
        };
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