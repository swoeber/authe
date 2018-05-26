import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  const {buttonStyle, textStyle} = styles;
  const {onPress, children} = props;
  return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
  )
};

const styles = {
  textStyle : {
    alignSelf: 'center',
    color: "#ddd",
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex : 1,
    alignSelf: 'stretch',
    backgroundColor: '#414a4c',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5,
  }
};

export {Button};