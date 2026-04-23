
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import NavBar from './components/navbar/NavBar'


const playersData = async () =>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const [coin, setCoin] = useState(200000000);
  const playerPromise = playersData();

  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Banner></Banner>
      <Suspense fallback={<h3>have some patience......</h3>}>
        <Players coin={coin} setCoin={setCoin} playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
