import React from "react";
import "./App.css";

const endDate = new Date(2021, 4,30);

const calcDays = () => {
  const today = new Date();
  return Math.floor((endDate - today)/(1000*60*60*24));
}
//TODO: colors
const colors = ['#5454c5', '#342056', '#ffffff'];

const height = window.innerHeight;
const width = window.innerWidth;

const renderBubble = () => {
  const max = calcDays();
  let bubbles = [];
  for (let i = 0; i< max; i++) {
    const size = Math.floor(Math.random() * 16) + 8;
    let styles = {
      position: 'absolute',
      top: Math.random()*height,
      right: Math.random()*width,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: `${size}px`,
      borderColor: colors[(Math.floor(Math.random()*colors.length))]
    };
    bubbles.push(<div className="bubble" style={styles}></div>);
  }
  return bubbles;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>We'll miss you Bonnie</p>
  <p>Approx days left: {`${calcDays()}`}</p>
      </header>
  {renderBubble()}
    </div>
  );
}

export default App;
