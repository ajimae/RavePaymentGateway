import React, { Component } from 'react';
import {
  Text
} from 'react-native';

class Texts extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <Text style={this.props.style}>{this.props.text}</Text>
      </>
    )
  }
}

Text.defaultProps = {
  style: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'Avenir Next'
  }
}

export default Texts;
