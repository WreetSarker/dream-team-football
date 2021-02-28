import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, position, email, phone, salary, image } = props.player;
    return (
        <div className="container-user">
            <div className="users-image">
                <img src={image} alt="" />
            </div>
            <div className="users-detail">
                <h3>Name: {name}</h3>
                <h5>Email: {email}</h5>
                <p>Position: {position}</p>
                <p>Phone: {phone}</p>
                <p><small>Salary: {salary}</small></p>
                <button className="add-btn" onClick={() => props.handleAddPlayers(props.player)}><FontAwesomeIcon icon={faPlusSquare} /> Add Player</button>
            </div>
        </div>
    );
};

export default Player;