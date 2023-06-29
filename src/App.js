import {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Grid from './pages/grid';
import AddPixel from './pages/addUser';

function App() {
  const [pixelPicked, setPickedPixel] = useState(null)

  const handlePickedPixel = (x) => {
    setPickedPixel(x);
  }
  const addPixel = (event,pseudo,couleur) => {
    event.preventDefault();
    if(pixelPicked && pseudo && couleur) {
      let key =pixelPicked;
      let data = {
          'user': pseudo,
          'color':couleur,
          coordinates:key
      }
      axios.post('http://localhost:8000/', data)
      .then( (response) => {
        console.log(response);
      })
      .catch((error) =>{
        console.log(error);
        alert("An error has occurred")
      });
    }
     else {
      alert("please select a pixel and be sure to fill the fields ",pixelPicked, pseudo, couleur )
    }
  }
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <AddPixel pixelPicked={pixelPicked} addPixel={addPixel}/>
            <Grid  pixelPicked={pixelPicked} handlePickedPixel={handlePickedPixel} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
