
import React, {useState, useEffect} from 'react';
import MusicPlayer from './Components/MusicPlayer';
import Liblary from './Components/Sidebar/Liblary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './Components/SideBar'
import Like from './Components/Sidebar/Like'
import Reviews from './Components/Sidebar/Reviews'



import './App.css';

function App() {
  const[songs, setSongs] = useState(null)
  const[reviews, setReviews] = useState([])
  const[allData, setAllData] = useState([])


    const[currentSongI, setCurrentSongI] = useState(0)
    const[nextSongI, setNextSongI] = useState(currentSongI + 1)
  
    useEffect(() =>{
      Promise.all([
        fetch('http://localhost:3000/data'),
        fetch('http://localhost:9292/reviews')   
      ])
      
        .then(([resSongs, resReviews]) =>
        Promise.all([resSongs.json(), resReviews.json()]))
      
        .then(([dataSongs, dataReviews]) => {
          setSongs(dataSongs);
          setReviews(dataReviews);
          setAllData(dataSongs.concat(dataReviews));
        })
      },[])  
      console.log(songs, reviews, allData);

  return (
    <Router>
   <>
   <div>
    <header>
    M- Player 
    </header>
   </div>
   <SideBar />
    <div className="App">
      
    <Switch>
      <Route exact path='/home'>
      {songs && <MusicPlayer currentSongI={currentSongI} setNextSongI={setNextSongI} setCurrentSongI={setCurrentSongI} nextSongI={nextSongI} songs={songs}/>}
      </Route>
      <Route path='/reviewform'>
          <Liblary />
      </Route>
      <Route path='/login'>
        <Like />
      </Route>
      <Route path='/reviews'>
        <Reviews />
      </Route>
    </Switch>
    </div>
    </>
    </Router>
 
    
  );
}

export default App;