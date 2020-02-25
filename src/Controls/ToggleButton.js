import React, { Component } from 'react';
import {
  
} from 'react-native';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <TextInput
          style={this.props.style}
          onChangeText={value => this.props.onChangeText}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
      </>
    )
  }
}

InputText.defaultProps = {
  style: {
    fontSize: 12,
    height: 35,
    width: 200,
    borderColor: '#e9edf1',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    fontFamily: 'Avenir Next',
    backgroundColor: '#e9edf1'
  },
  placeholder: 'None',
  onChangeText: x => x
}

export default InputText;
