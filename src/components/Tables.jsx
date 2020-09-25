import React, { useState } from 'react';
import Profiles from './Profiles';

function Tables(){

    const profiles = useState({});

    return (<div>
        <h1 className="scoreboardheader">Scoreboard</h1>
        <table className="scoreboard">
            <tbody>
            {profiles.map((player) => {
            const {name, wins, loss} = player;
            return (
                <tr>
                    <td>{name}</td>
                    <td>{wins}</td>
                    <td>{loss}</td>
            </tr> 
            )
        })}
            </tbody>
        </table>    
    </div>)
}

export default Tables;