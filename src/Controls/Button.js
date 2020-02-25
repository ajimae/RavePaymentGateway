import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

// import Text from './Text';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <View style={[{backgroundColor: '#00cff0', ...this.props.style}]}>
            <Text style={{...this.props.textStyle}}>{this.props.text}</Text>
            {this.props.imageUrl && <Image resizeMode="contain" style={this.props.imageStyle} source={{ uri: this.props.imageUrl }} />}
          </View>
        </TouchableWithoutFeedback>
      </>
    )
  }
}

Button.defaultProps = {
  style: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#00cff0'
  },
  textStyle: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Avenir-Medium'
  },
  imageStyle: {
    width: 70,
    height: 20,
  },
  imageUrl: false,
  text: 'Confirm Pay',
  onPress: function(x) { return x }
}

export default Button;
