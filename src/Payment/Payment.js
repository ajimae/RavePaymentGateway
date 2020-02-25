import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import Texts from '../Controls/Text';
import Method from '../Method/Method';
import CardForm from '../Form/CardForm';
import BankForm from '../Form/BankForm';
import BottomSheet from '../Controls/BottomSheet';
import { _w, _h } from '../helpers/normalizer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ScrollView } from 'react-native-gesture-handler';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      currentForm: 'Bank',
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        amount: ''
      },
      bankDetails: {
        accountNumber: null,
        selectedBank: null,
        cardHolder: null
      }
    }
  }

  componentDidMount() {
    const { params: { userData } } = this.props.route;
    this.setState({
      amount: userData.amount,
      userData: {
        ...userData
      }
    });
  }

  switchForm(method) {
    this.setState({
      currentForm: method
    });
  }

  getState(stateData) {
    this.setState(prevState => ({
      ...prevState,
      stateData
    }), x => x);
  }

  makePayment() {
    return this.BottomSheet.open();
  }

  closeConfrimTab() {
    return this.BottomSheet.close();
  }

  render() {
    const { navigation } = this.props;
    const { userData, amount } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <View style={[styles.price, { paddingTop: _h('3.5%') }]}>
            <Texts style={{ color: '#333' }} text="Total price" />
            <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
              <Text style={{ color: '#5671f7' }}>{'\u20A6'}</Text>
              <Texts style={{ fontFamily: 'Avenir-Medium', fontSize: _w('10%'), color: '#5671f7' }} text={amount} />
            </View>
          </View>
          <View style={styles.method}>
            <Method method={this.state.currentForm} type={this.switchForm.bind(this)} />
          </View>
          <View style={styles.form}>
            {this.state.currentForm == 'Bank' && !!userData.firstName && <BankForm userData={userData} getState={this.getState.bind(this)} />}
            {this.state.currentForm == 'Card' && !!userData.firstName && <CardForm userData={userData} getState={this.getState.bind(this)} />}
            {this.state.currentForm == 'Wallet' && <View />}
          </View>
          <BottomSheet
            ref={ref => {
              this.BottomSheet = ref;
            }}
            height={300}
            duration={250}
            closeOnDragDown
            customStyles={{
              container: {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }
            }}
          >
            <View style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: _w('45%'),
              width: _w('45%'),
              borderWidth: 1,
              borderColor: '#2ECC71',
              borderRadius: _h('30%'),
              marginTop: _h('2%'),
              marginBottom: _h('3%')
            }}>
              <Image
                style={{
                  height: _w('25%'),
                  width: _w('25%'),
                }}
                source={{ uri: 'data:image/png;base64,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' }}
              />
            </View>
            <Footer style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: _w('92%'),
              height: _h('5%'),
              borderRadius: _w('10%'),
              marginRight: _w('0%'),
              backgroundColor: '#5671f7',
            }} onPress={this.closeConfrimTab.bind(this)} text="Close" />
          </BottomSheet>
          <View style={styles.footer}>
            <Footer
              text="Proceed to confirm"
              onPress={this.makePayment.bind(this)}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: _w('100%'),
    height: _h('100%'),
  },
  price: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: _w('100%'),
    height: _h('10%'),
    paddingLeft: _w('4%'),
    backgroundColor: '#eaedf2',
  },
  method: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: _w('100%'),
    height: _h('15%'),
    paddingLeft: _w('4%'),
    backgroundColor: '#eaedf2',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: _w('100%'),
    height: _h('40%'),
    backgroundColor: '#eaedf2',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: _w('100%'),
    height: _h('26%'),
    paddingLeft: _w('4%'),
    paddingTop: _w('10%'),
    backgroundColor: '#eaedf2',
  }
});

export default Payment;
