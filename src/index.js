import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Texts from './Controls/Text';
import InputText from './Controls/Input';
import { _h, _w } from './helpers/normalizer';
import Footer from './Footer/Footer';
import { ScrollView } from 'react-native-gesture-handler';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      amount: ''
    }
  }

  handleChange(name, value) {
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  navigate() {
    const stateEntries = Object.values(this.state);
    for (let i = 0; i < stateEntries.length; i++)
      if (stateEntries[i].trim() == '')
        return alert('Please all fields are required');
    return this.props.navigation.navigate('Payment', { userData: this.state });
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          {/* <ScrollView> */}
            <View style={{ marginTop: _h('15%') }}>
              <Texts text="Enter information" style={styles.textHeader} />
            </View>
            <View style={styles.field}>
              <Texts style={{ color: '#333' }} text="First Name" />
              <View>
                <InputText
                  style={styles.input}
                  placeholder="Enter First name"
                  value={this.state.firstName}
                  autoCorrect={false}
                  onChangeText={this.handleChange.bind(this, 'firstName')}
                />
              </View>
            </View>
            <View style={styles.field}>
              <Texts style={{ color: '#333' }} text="Last Name" />
              <View>
                <InputText
                  style={styles.input}
                  contextMenuHidden={true}
                  placeholder="Enter Last name"
                  value={this.state.lastName}
                  onChangeText={this.handleChange.bind(this, 'lastName')}
                />
              </View>
            </View>
            <View style={styles.field}>
              <Texts style={{ color: '#333' }} text="Email" />
              <View>
                <InputText
                  style={styles.input}
                  placeholder="Enter email here"
                  value={this.state.email}
                  onChangeText={this.handleChange.bind(this, 'email')}
                />
              </View>
            </View>
            <View style={styles.field}>
              <Texts style={{ color: '#333' }} text="Amount" />
              <View>
                <InputText
                  style={styles.input}
                  placeholder="Enter amount here"
                  value={this.state.amount}
                  onChangeText={this.handleChange.bind(this, 'amount')}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <Footer
                text="Continue"
                onPress={() => this.navigate()}
              />
            </View>
          {/* </ScrollView> */}
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eaedf2',
    justifyContent: 'center',
    width: _w('100'),
    height: _h('100%')
  },
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
    marginTop: _h('0.5%')
  },
  field: {
    marginTop: _h('1.5%'),
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
  },
  textHeader: {
    marginBottom: _h('5%'),
    fontSize: _w('7%'),
    color: '#333',
    fontWeight: '600',
    fontFamily: 'Avenir Next'
  }
});

export default UserInfo;
