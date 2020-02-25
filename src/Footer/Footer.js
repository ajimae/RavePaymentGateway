import React, { Component } from 'react';

import Button from '../Controls/Button';
import { _w, _h } from '../helpers/normalizer';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handlePayment() {
    alert('Payment Confirmed');
  }

  render() {
    return (
      <Button
        text={this.props.text}
        style={{...this.props.style}}
        onPress={this.props.onPress}
        textStyle={this.props.textStyle}
      />
    )
  }
}

Footer.defaultProps = {
  textStyle: {
    color: '#fff',
    fontSize: _w('3.5%')
  },
  text: "Proceed to confirm",
  onPress: x => x,
  style: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: _w('92%'),
    height: _h('5%'),
    borderRadius: _w('10%'),
    marginRight: _w('3%'),
    backgroundColor: '#5671f7',
  }
}

export default Footer;
