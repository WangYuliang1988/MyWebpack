import React, {Component} from 'react';
import {render} from 'react-dom';

class Greeter extends Component {
  render() {
    return (
      <div>
        Hello Webpack!
      </div>
    );
  }
}

render(<Greeter/>, document.getElementById('root'));