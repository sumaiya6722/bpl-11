import React,{useState} from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Card = ({player, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
  const [isSelectedPlayer, setIsSelectedPlayer] = useState(false); ///initially selected thakbe na


  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if(newCoin >= 0){
      setCoin(newCoin);
    }else{
      toast.error('not enough point to buy players');
      return;
    }
    toast.success(`${player.playerName} is selected`);
    setIsSelectedPlayer(true);
    setSelectedPlayers([...selectedPlayers,player]);
    
  }
  return (
    <div className="card border border-gray-300 bg-base-100 ">
        <figure>
          <img
            src={player.image} />
        </figure>

        <div className="card-body">

          <h2 className="card-title text-2xl"><FaUser />{player.playerName}</h2>

          <div className="flex justify-between gap-2">
            <div className='flex items-center gap-2 opacity-50'>
            <FaFlag />
            <p>{player.playerCountry}</p>
            </div>
            <button className='btn btn-soft border-none'>{player.playerType}</button>
          </div>

          <div className="divider"></div>

          <h2 className='font-bold text-lg'>Rating({player.rating})</h2>

          <div className="flex justify-between mb-3">
            <span className="font-bold text-[16px]">Left-Hand-Bat</span>
            <span className="text-gray-500 text-[16px]">{player.battingStyle}</span>
          </div>

          <div className='flex justify-between'>

            <p className='font-bold text-lg'>${player.price}</p>

            <button 
            disabled={isSelectedPlayer ? true:false} 
            onClick={handleChoosePlayer} 
            className="btn btn-outline opacity-60 text-[15px]">
              {isSelectedPlayer === true ? 'Selected' : 'Choose Player'}
            </button>
          </div>
          
        </div>
    </div>
  );
};


export default Card;