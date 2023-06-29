import {useState} from 'react';


export default function AddPixel({pixelPicked,addPixel}) {
    const [pseudo, setPseudo] = useState(null);
    const [couleur, setCouleur] = useState(null);
  
    const addPseudo = (event) => {
      setPseudo(event.target.value);
    };
  
    const addColor = (event) => {
      setCouleur(event.target.value);
    };
  
    const handleSubmit = (event) => {
      addPixel(event,pseudo,couleur)
  }
    return (

    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pseudo:
          <input type="text" value={pseudo} onChange={addPseudo} />
        </label>
        <br />
        <label>
          Couleur:
          <input type="text" value={couleur} onChange={addColor} />
        </label>
        <br />
        <div> pixel : {pixelPicked? pixelPicked : "selectionner un pixel"} </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
