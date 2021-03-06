import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import Character from './Character';

function App(){
  var containerStyle = {
    backgroundColor: 'rgb(255, 255, 255, 0.4)'
  }
  return (
    <div>
      <style jsx>{`
        body {
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
        }
        `}</style>
      <div className="container">
        <Header/>
        <Character/>
      </div>
    </div>

  );
}

export default App;
