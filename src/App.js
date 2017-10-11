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
            <h2 className="headingName">Progressive Web Apps</h2><br/>
                <div className="left">
                  <h3> Progressive web application steps to deploy into heroku using heroku cli</h3>
                  <span > $ heroku login </span><br/>
                  <span> $git clone https://github.com/heroku/node-js-getting-started.git</span><br/>
                  <span> $cd node-js-getting-started </span><br/>
                  <span> $heroku create </span><br/>
                  <span> $git push heroku master</span><br/>
                  <span> $heroku ps:scale web=1 </span><br/>
                  <span> $heroku open </span><br/>
                  <span> $heroku logs --tail  --to view logs</span><br/>
                </div>

                <div className="left">
                  <h3> Progressive web application steps to deploy into heroku using github</h3>
                  <span> Create new Repository in Github, and name it.</span><br/>
                  <span> Then, copy "https://github.com/inderorg/foolfull.git" your git url.</span><br/>
                  <span> Now open Terminal type commands as below: </span><br/>
                  <span> $mkdir reactApp </span><br/>
                  <span> $cd reactApp</span><br/>
                  <span> $git clone https://github.com/inderorg/foolfull.git </span><br/>
                  <span> $git init</span><br/>
                  <span> $git add README.md</span><br/>
                  <span> $git commit -m "first commit"</span><br/>
                  <span> $git remote add origin https://github.com/inderorg/foolfull.git</span><br/>
                  <span> $git push -u origin master</span><br/>
                </div>
          </div>
      </div>
    );
  }
}

export default App;
