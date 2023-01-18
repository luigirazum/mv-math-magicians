import React from 'react';
import Calculator from './components/Calculator';
import './assets/styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <Calculator title="Calculator" />
      </div>
    );
  }
}

export default App;
