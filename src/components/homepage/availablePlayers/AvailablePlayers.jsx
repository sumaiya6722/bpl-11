import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import Card from '../card/Card';


const AvailablePlayers = ({players, setCoin}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {players.map(player => {
          return (
            <div>
              <Card setCoin={setCoin} player={player}></Card>

            </div>
      )})
      }
      
    </div>
  );
};

export default AvailablePlayers;