import React, { useEffect, useState } from 'react';
import playersData from '../../players.json';
import Team from '../Team/Team';
import Player from '../Player/Player';
import './List.css';

const List = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playersData)
    }, [])
    const [team, setTeam] = useState([]);
    const handleAddPlayers = (player) => {
        const newTeam = [...team, player]
        setTeam(newTeam);
    }
    return (
        <div className="container">
            <div className="users-container">
                {
                    players.map(player => <Player handleAddPlayers={handleAddPlayers} key={player.id} player={player}></Player>)
                }
            </div>
            <div className="collection-container">
                <Team team={team}></Team>
            </div>
        </div>
    );
};

export default List;