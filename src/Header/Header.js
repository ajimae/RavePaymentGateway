import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import Texts from '../Controls/Text';
import { _w, _h } from '../helpers/normalizer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
          <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', height: _h('10%'), width: _w('22%'), marginBottom: _h('1%'), marginLeft: _w('3%') }}>
            <Image
              style={{ height: 10, width: 40 }}
              source={{ uri: 'https://cdn1.iconfinder.com/data/icons/thin-arrows-1/100/ThinArrow-40-512.png' }}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={{ marginBottom: _h('1%') }}>
          <Texts style={{ fontFamily: 'Avenir-Medium', fontSize: 13 }} text="Payment data" />
        </View>
        <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: _h('10%'), width: _w('25%') }}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: -_h('10%'),
    width: _w('100%'),
    height: _h('20%'),
    backgroundColor: '#eaedf2',
  }
});

export default Header;
