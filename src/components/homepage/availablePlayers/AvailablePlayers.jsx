import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import Card from '../card/Card';


const AvailablePlayers = ({players, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {players.map((player,index) => {
          return (
            <div>
          <Card key={index} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} player={player} coin={coin}></Card>

            </div>
      )})
      }
      
    </div>
  );
};

export default AvailablePlayers;