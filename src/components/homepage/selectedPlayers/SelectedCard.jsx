import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedCard = ({player, handleDeletePlayer, ind}) => {
  return (<div key={ind} className='border border-gray-300 flex items-center gap-6 justify-between rounded-2xl p-3 mb-5'>
                    <div className='flex items-center gap-3'>
                      <img className='rounded-xl h-25 w-25' src={player.image} alt="" />
                      <div>
                        <h2 className='font-bold text-2xl'><FaUser />{player.playerName}</h2>
                        <p>{player.battingStyle}</p>
                      </div>
                    </div>
  
                      <button onClick={() => handleDeletePlayer(player)} className='btn font-bold text-3xl text-red-600'><MdDelete /></button>
                  </div>);
};

export default SelectedCard;