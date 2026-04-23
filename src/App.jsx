
import { Suspense } from 'react';
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import NavBar from './components/navbar/NavBar'


const playersData = async () =>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const playerPromise = playersData();

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<h3>have some patience......</h3>}>
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
