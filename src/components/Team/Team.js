import React from 'react';

const Team = (props) => {
    const salarySum = props.team.reduce((total, current) => total + parseFloat((current.salary).slice(1)), 0);
    return (
        <div>
            <h2>Total added players: {props.team.length}</h2>
            <ul>
                {
                    props.team.map(player => <li>{player.name} : {player.salary}</li>)
                }
            </ul>
            <p>Total salary of added players: {salarySum}</p>
        </div>
    );
};

export default Team;