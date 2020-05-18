import React, {useEffect, useState} from 'react';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Dogs from './views/Dogs';
import NewDog from './views/NewDog';

function App() {

  const [dogs, setDogs] = useState([])

  useEffect(() => {
      console.log('Fetching dogs at "/api/dogs"')
      axios.get('http://localhost:8002/api/dogs')
        .then((res) => {
          console.log(res);
          setDogs(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }, [])


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Router>
        <Dogs path="/" dogs={dogs}></Dogs>
        <NewDog path="/new"></NewDog>
      </Router>
    </div>
  );
}

export default App;
