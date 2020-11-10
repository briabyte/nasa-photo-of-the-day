import React, { useState, useEffect } from "react";
import axios from 'axios';
import Body from './AppComponents/Body';
import Header from './AppComponents/Header';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {

  
    axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=zqbVT1Tkx9kHqMrwhi7nXnjFnR0cHesfdOTmOuNf&date=2020-10-31`
    ).then((res) => {
      console.log('Results from useEffect of Nasa API', res);
      setData(res.data);
    }).catch((err) => {
      console.log('Error occured in useEffect of Nasa API: ', err);
    })
  }
  getData();
  }, []);
  
  
  
  return (
    <div className='App'>
      {data !== null ?
      <Body url={data.url} explanation={data.explanation} /> : <span></span>
      }
      {data !== null ?
      <Header title={data.title} /> : <span></span>
      }
      
    </div>
  );
}

export default App;
