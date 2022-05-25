import './App.css';
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { MdStarBorder, MdGrade } from "react-icons/md";

// https://gateway.marvel.com:443/v1/public/comics?apikey=364616f38a640571679489a231e7596d

// privateKey: 641d2a5e7c0172f05eb6aca5738d80136760a600
// publicKey: 364616f38a640571679489a231e7596d

// ts: 1

// 1641d2a5e7c0172f05eb6aca5738d80136760a600364616f38a640571679489a231e7596d

// hash: 3d87db852959a0363415e088aaf156bc


function App() {

  const [characters, setCharacters] = useState([]);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=364616f38a640571679489a231e7596d&hash=3d87db852959a0363415e088aaf156bc')
      .then(res => {
        setCharacters(res.data.data.results)
      }).catch(error =>
        console.log(error)
      )
  }, [])

  return (
    <div className="card App" style={{margin: "-130px"}}>
      <h1>Marvel</h1>
      <div className='row row-cols-1 row-cols-md-3 g-5' style={{padding: "60px 0px 60px 90px"}}>
        {characters.map(per => (
          <div className='col' key={per.id}>
            <div className='card border-image'>
              <button className='buttonAdd' onClick={() => setFav(!fav)}>
                {fav ? <MdStarBorder className='star' /> : <MdGrade className='star' />}
              </button>
              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className='card-img-top image' />
              <div className='row-cols-md-2'>
                <p className='card-text' style={{ width: '100%', color: "red" }}>{per.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;