import React, {useState,useEffect} from 'react';
import './grid.css';
import axios from 'axios';

function Grid({pixelPicked,handlePickedPixel}) {
  const size = 50;
  const [pixels, setPixels] = useState();

  useEffect(() => {

    axios.get('http://localhost:8000/')
      .then((res) => {
        setPixels(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    
  },[pixels])

  //ONCLICK EXISTED PIXEL
  const pixelClicked = (index) => {
    const selected = pixels[index]
    if(selected!==undefined){
        alert(`user is ${selected.user}, color is ${selected.color}`)
        handlePickedPixel(index)
    } else {
        // alert('you can pick it')
        handlePickedPixel(index)
    }
  };

  const renderGrid = () => {
    const grid = [];
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const pixelKey = `${row}-${col}`;
        const inexistedPixel = {
            width: '10px',
            height: '10px',
            display: 'inline-block',
            border: '1px solid gray',
            padding:0,
            margin:0
          };
        const existedPixel = {
            width: '10px',
            height: '10px',
            display: 'inline-block',
            border: '1px solid red',
            padding:0,
            margin:0
          };
        if(pixels && pixels[pixelKey]!==undefined){
            grid.push(<div 
                key={pixelKey} 
                style={{...existedPixel, background:`${pixels[pixelKey].color}`}}
                onClick={() => pixelClicked(pixelKey)}
                >
                </div>);
        } else {
            grid.push(
            <div key={pixelKey} style={inexistedPixel}
            onClick={() => pixelClicked(pixelKey)}
            >
            </div>);
        }
      }
    }
    return grid;
  };

  return <div className="grid-container">
            {renderGrid()}
        </div>;
}

export default Grid;