import './App.css'

import React, {Component} from 'react'
import Presentation from './presentation/Presentation'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPresentation: false
    }
  }
  render() {
    const startScreen = <div className="App">
      <div className="App-heading App-flex">
        <h2>Welcome to <span className="App-react">React</span></h2>
      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={require('./react.svg')}/>
        <p><button onClick={() => this.setState({showPresentation: true})} style={{ fontSize: "xx-large" }}>Start Presentation</button></p>
      </div>
    </div>;

    return !this.state.showPresentation ? startScreen : <Presentation />;
  }
}

export default App
