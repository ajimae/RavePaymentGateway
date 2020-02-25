import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import Button from '../Controls/Button';
import Texts from '../Controls/Text';
import { _w, _h } from '../helpers/normalizer';

const CHECKED = 'https://www.materialui.co/materialIcons/toggle/radio_button_on_white_192x192.png';
const UNCHECKED = 'https://www.materialui.co/materialIcons/toggle/radio_button_unchecked_white_96x96.png';

class Method extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedMethod: null
    }
  }

  componentDidMount() {
    this.setState({
      selectedMethod: this.props.method
    });
  }

  changePaymentMethod(item) {
    this.props.type(item);
    this.setState({ selectedMethod: item });
  }

  render() {
    return (
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: _w('90%'), height: _h('10%') }}>
        <View>
          <Texts style={{ color: '#333', marginBottom: _h('1%') }} text="Payment Method" />
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={['Bank', 'Card', 'Wallet']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <View style={{ shadowColor: '#ccc' }}>
              <Button
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  width: _w('35%'),
                  height: _h('6.6%'),
                  borderRadius: _w('3%'),
                  marginRight: _w('3%'),
                  backgroundColor: '#5671f7',
                }}
                text={item}
                textStyle={{
                  color: '#fff',
                  fontSize: _w('4%')
                }}
                imageUrl={ item == this.state.selectedMethod ? CHECKED : UNCHECKED }
                imageStyle={{
                  width: _w('11%'),
                  height: _h('11%'),
                }}
                onPress={this.changePaymentMethod.bind(this, item)}
              />
            </View>
          )}
        />
      </View>
    )
  }
}

export default Method;
