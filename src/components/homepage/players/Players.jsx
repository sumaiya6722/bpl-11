import React, {use, useState} from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Players = ({playerPromise, setCoin}) => {
  const players = use(playerPromise);
  const [selectedButton, setSelectedButton] = useState("available");  //selectedButton stores which button is active....default is 'available'
  return (
    <div className='container mx-auto my-5'>
      <div className='flex justify-between mb-4'>

        {selectedButton === 'available' ? <h2 className='font-bold text-2xl'>Available Players</h2> : <h2 className='font-bold text-2xl'>Selected Players</h2>}

        <div >
          <button onClick={() => setSelectedButton('available')} className={`btn ${selectedButton === "available" ? "bg-[#E7FE29]" :"opacity-70"} sm:btn-sm md:btn-md lg:btn-lg rounded-r-none rounded-l-xl`}>Available</button>

          <button onClick={() => setSelectedButton('selected')} className={`btn ${selectedButton === "selected" ? "bg-[#E7FE29]" : "opacity-70"} sm:btn-sm md:btn-md lg:btn-lg rounded-l-none rounded-r-xl`}>Selected(0)</button>
        </div>
      </div>


      {selectedButton==='available' ? <AvailablePlayers setCoin={setCoin} players = {players}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
    </div>
  );
};

export default Players;