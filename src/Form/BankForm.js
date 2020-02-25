import React, { Component } from 'react';
import {
  View,
  Switch,
  FlatList,
  StyleSheet,
} from 'react-native';

const BANKS = [
  'Diamond Bank',
  'EcoBank',
  'Fidelity Bank',
  'UBA',
  'Wema Bank Plc',
  'Stanbic Bank',
  'GTB',
  'Coronation Merchant Bank',
  'FBNQuest Merchant Bank',
  'FSDH Merchant Bank',
  'Rand Merchant Bank',
  'Nova Merchant Bank',
  'Unity Bank Plc',
  'Sterling Bank Plc',
  'Keystone Bank Limited',
  'Polaris Bank Limited',
  'Stanbic IBTC Bank Plc',
  'Heritage Banking Company Limited',
  'First City Monument Bank Limited',
  'First Bank of Nigeria Limited',
  'Zenith Bank Plc',
  'Providus Bank Limited',
  'Standard Chartered',
  'Citibank Nigeria Limited',
  'Union Bank of Nigeria Plc'
];

import Texts from '../Controls/Text';
import { _w, _h } from '../helpers/normalizer';
import Input from '../Controls/Input';
import Button from '../Controls/Button';
import BottomSheet from '../Controls/BottomSheet';
import { formatName } from '../helpers/formatName';

class BankForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      accountNumber: '',
      selectedBank: 'Select Your Bank',
      userData: {
        firstName: '',
        lastName: '',
        email: ''
      },
      cardHolder: '',
      BankCredentials: {}
    }
  }

  componentDidMount() {
    const { userData } = this.props;
    const { firstName, lastName } = userData;
    const cardHolder = formatName(`${firstName} ${lastName}`);
    this.setState({
      value: false,
      amount: userData.amount,
      cardHolder,
      userData: {
        ...userData
      }
    });
  }

  handleChange(name, value) {
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  openActionSheet() {
    const { accountNumber } = this.state;
    if(!accountNumber || accountNumber.length < 10 || accountNumber.length > 10 || isNaN(accountNumber)) {
      alert('Please input a valid account number');
      return false;
    }
    return this.BottomSheet.open();
  }

  closeActionSheet(item) {
    this.setState({ selectedBank: item },() => this.props.getState(this.state));
    return this.BottomSheet.close();
  }

  render() {
    const { value, accountNumber, selectedBank } = this.state;
    const lastItem = BANKS[BANKS.length - 1];
    return (
      <>
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: _h('10%'), width: _w('92%') }}>
          <Texts style={{ color: '#333' }} text="Account number" />
          <View>
            <Input
              style={styles.input}
              keyboardType='numeric'
              maxLength={10}
              keyboardType="number-pad"
              value={accountNumber}
              placeholder="000 123 456 789 0"
              onChangeText={this.handleChange.bind(this, 'accountNumber')}
            />
          </View>
        </View>
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: _h('10%'), width: _w('92%') }}>
          <Texts style={{ color: '#333' }} text="Select Bank" />
          <View>
            <Button style={styles.input}
              text={this.state.selectedBank}
              textStyle={{
                color: selectedBank == 'Select Your Bank' ? '#ccc' : '#333',
              }}
              onPress={this.openActionSheet.bind(this)}
            />
          </View>
        </View>
        <BottomSheet
          ref={ref => {
            this.BottomSheet = ref;
          }}
          height={350}
          duration={250}
          closeOnDragDown
          customStyles={{
            container: {
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30
            }
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={BANKS}
            keyExtractor={item => item}
            renderItem={({ item }) => {
              return (
                <View style={{ shadowColor: '#ccc' }}>
                  <Button
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      alignItems: 'flex-start',
                      width: _w('100%'),
                      height: _h('6.6%'),
                      borderBottomWidth: lastItem == item ? 0 : 0.2,
                      borderColor: '#ccc',
                      paddingLeft: _w('5%'),
                      backgroundColor: '#fff',
                    }}
                    text={item}
                    textStyle={{
                      color: '#333',
                      fontSize: _w('4%')
                    }}
                    onPress={this.closeActionSheet.bind(this, item)}
                  />
                </View>
              )
            }}
          />
        </BottomSheet>
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: _h('10%'), width: _w('92%') }}>
          <Texts style={{ color: '#333' }} text="Card holder" />
          <View style={[styles.input, { paddingTop: _h('1.8%') }]}>
            <Texts style={{ color: '#333' }} text={this.state.cardHolder} />
          </View>
        </View>
        <View style={styles.saveCard}>
          <View style={styles.saveCardOption}>
            <View>
              <Texts style={{ color: '#333' }} text="Save card data for future payments" />
            </View>
            <View>
              <Switch value={value} onChange={() => { this.setState({ value: !value }) }} />
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

export default BankForm;
