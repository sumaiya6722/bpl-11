import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import SelectedCard from './SelectedCard';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
  
  const handleDeletePlayer = (player) => {
    const filteredPlayer = selectedPlayers.filter(filtPlayer => filtPlayer.playerName != player.playerName); //here filterPlayer is basically player who isn't selected
    setSelectedPlayers(filteredPlayer);
    setCoin(coin + player.price);   //player.price is the price for player who is selected
  }


  return (
    <div className=''>
      {selectedPlayers.length === 0 ?
       <div className='border rounded-xl p-20 text-center'>
        <h3 className='font-semibold text-2xl'>No Players Selected Yet</h3>
        <p className='text-xl'>Go to Available tab to select Players</p>
       </div> : 
       selectedPlayers.map((player, ind) => {
        return (<SelectedCard key={ind} player={player} handleDeletePlayer={handleDeletePlayer}></SelectedCard>);
      })}
    </div>);
  
};

export default SelectedPlayers;