import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios';

const App = (props) => {
  //get Props
  const [response, setResponse] = useState([]);
  useEffect(() => {
    //axios get api call
    //dummy api for fetch
    axios
      .get('https://599d6a620a785b0011f4f6c8.mockapi.io/users')
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const listItems = response.map((item) => (
    <li key={item.name.toString()}>{item.name}</li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

render(<App />, document.getElementById('root'));
