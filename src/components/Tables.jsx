import React from 'react';

function Tables(){
    const profiles = [{
        name: "Django",
        wins: 100,
        loss: 3
    },
    {
        name: "Steve",
        wins: 1,
        loss: 50
    },
    {
        name: "Bruno",
        wins: 2,
        loss: 50
    }]

    return (<div>
        <h1 className="scoreboardheader">Overall Scores</h1>
        <table className="scoreboard">
            <tbody>
            <tr>
                <th> Name  </th>
                <th> Wins </th>
                <th> Loss </th>
            </tr>
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