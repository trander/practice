import React, {Component} from 'react';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
