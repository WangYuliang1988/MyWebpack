import React, {Component} from 'react';
import {render} from 'react-dom';

class Greeter extends Component {
  render() {
    return (
      <span>Hello Webpack!</span>
    );
  }
}

render(<Greeter/>, document.getElementById('root'));