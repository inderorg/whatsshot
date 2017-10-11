import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to foolfull.com </h1>
        </header>
        <div className="App-intro">
          Progressive Web Apps<br/>
          To get started, edit <code>src/App.js</code> and save to reload.<br/>
          <span float='left'> $ heroku login </span><br/>
          <span> $git clone https://github.com/heroku/node-js-getting-started.git</span><br/>
          <span> $cd node-js-getting-started </span><br/>
          <span> $heroku create </span><br/>
          <span> $git push heroku master</span><br/>
          <span> $heroku ps:scale web=1 </span><br/>
          <span> $heroku open </span><br/>
          <span> $heroku logs --tail  --to view logs</span><br/>
        </div>
      </div>
    );
  }
}

export default App;
