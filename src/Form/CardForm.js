import React, { Component } from 'react';
import {
  View,
  Switch,
  StyleSheet,
} from 'react-native';

import Texts from '../Controls/Text';
import { _w, _h } from '../helpers/normalizer';
import Input from '../Controls/Input';
import { formatName } from '../helpers/formatName';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHolder: '',
      saveCard: false,
      amount: 0,
      userData: {
        firstName: '',
        lastName: '',
        email: ''
      },
      cardCredentials: {
        cvv: null,
        authMethod: 'otp',
        cardNumber: null,
        validUntil: null,
        cardHolder: null,
      },
    }
  }

  componentDidMount() {
    const { userData } = this.props;
    const { firstName, lastName, amount } = userData;
    const cardHolder = formatName(`${firstName} ${lastName}`);
    this.setState({
      amount,
      cardHolder,
      userData: {
        ...userData,
        cardHolder,
      }
    });
  }

  handleChange(name, value) {
    this.setState(prevState => ({
      cardCredentials: {
        ...prevState.cardCredentials,
        [name]: value
      }
    }), this.getState(this.state));
  }

  getState(state) {
    this.props.getState(state)
  }

  render() {
    const { cardCredentials, cardHolder } = this.state;
    const { cvv, authMethod, cardNumber, validUntil } = cardCredentials;
    return (
      <>
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: _h('10%'), width: _w('92%') }}>
          <Texts style={{ color: '#333' }} text="Card number" />
          <View>
            <Input
              style={styles.input}
              placeholder="**** **** **** **23"
              value={cardNumber}
              onChangeText={this.handleChange.bind(this, 'cardNumber')}
            />
          </View>
        </View>
        <View style={styles.midContainer}>
          <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: _h('10%') }}>
            <Texts style={{ color: '#333' }} text="Valid until" />
            <View>
              <Input
                style={styles.input2}
                placeholder="Month / Year"
                value={validUntil}
                onChangeText={this.handleChange.bind(this, 'validUntil')}
              />
            </View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: _h('10%') }}>
            <Texts style={{ color: '#333' }} text="CVV" />
            <View>
              <Input
                style={styles.input1}
                placeholder="***"
                secureTextEntry={true}
                value={cvv}
                maxLength={3}
                onChangeText={this.handleChange.bind(this, 'cvv')}
              />
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: _h('10%'), width: _w('92%') }}>
          <Texts style={{ color: '#333' }} text="Card holder" />
          <View style={[styles.input, { paddingTop: _h('1.8%') }]}>
            <Texts style={{ color: '#333' }} text={cardHolder} />
          </View>
        </View>
        <View style={styles.saveCard}>
          <View style={styles.saveCardOption}>
            <View>
              <Texts style={{ color: '#333' }} text="Save card data for future payments" />
            </View>
            <View>
              <Switch value={this.state.value} onChange={() => this.setState({ value: !this.state.value })} />
            </View>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: _w('4.0%'),
    height: _h('6.0%'),
    width: _w('91.5%'),
    borderColor: '#e9edf1',
    borderWidth: 1,
    padding: _w('3%'),
    borderRadius: _w('2%'),
    fontFamily: 'Avenir Next',
    backgroundColor: '#ffffff',
    marginTop: _h('1.0%')
  },
  input1: {
    fontSize: _w('4.0%'),
    height: _h('6.0%'),
    width: _w('45%'),
    borderColor: '#e9edf1',
    borderWidth: 1,
    padding: _w('3%'),
    borderRadius: _w('2%'),
    fontFamily: 'Avenir Next',
    backgroundColor: '#ffffff',
    marginTop: _h('1.0%')
  },
  input2: {
    fontSize: _w('4.0%'),
    height: _h('6.0%'),
    width: _w('45%'),
    borderColor: '#e9edf1',
    borderWidth: 1,
    padding: _w('3%'),
    borderRadius: _w('2%'),
    fontFamily: 'Avenir Next',
    backgroundColor: '#ffffff',
    marginTop: _h('1.0%')
  },
  midContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: _w('92.0%'),
  },
  saveCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: _w('100%'),
    height: _h('6%'),
    marginTop: _h('3%'),
    backgroundColor: '#eaedf2',
  },
  saveCardOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: _w('92.0%'),
  },
});

export default Form;
