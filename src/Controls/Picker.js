import React, { Component } from 'react';
import {
  Picker
} from 'react-native';

class BankPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'PHP'
    }
  }

  render() {
    return (
      <>
        <Picker
          selectedValue={this.state.language}
          style={this.props.style}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </>
    )
  }
}

BankPicker.defaultProps = {
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
  onChangeText: x => x,
  secureTextEntry: false
}

export default BankPicker;
