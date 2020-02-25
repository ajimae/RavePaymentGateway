import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

// const InputText = ({
//   name,
//   type,
//   placeholder,
//   onChangeText,
//   className,
//   value,
//   error,
//   children,
//   label,
//   style,
// }) => (
//     <React.Fragment>
//       <TextInput
//         id={name}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         onChange={onChangeText}
//         value={value}
//         className={className}
//         style={style}
//       />
//     </React.Fragment>
//   )

// FormInput.defaultProps = {
//   type: "text",
//   className: ""
// }
// );

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <TextInput
          name={this.props.name}
          style={this.props.style}
          value={this.props.value}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
        />
      </>
    )
  }
}

InputText.defaultProps = {
  name: null,
  style: {
    fontSize: 12,
    height: 35,
    width: 200,
    borderColor: '#e9edf1',
    borderWidth: 1,
    padding: 5,
    autoCorrect: false,
    borderRadius: 5,
    dataDetectorTypes: 'phoneNumber',
    keyboardType: 'default',
    autoCompleteType: 'off',
    fontFamily: 'Avenir Next',
    backgroundColor: '#e9edf1'
  },
  placeholder: 'None',
  value: null,
  onChangeText: () => {},
  secureTextEntry: false
}

export default InputText;
