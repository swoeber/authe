import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const {containerStyle} = styles;
  return (
      <View style={containerStyle}>
        {props.children}
      </View>
  )
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#232b2b',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#414a4c',
    position: 'relative'
  }
};

export {CardSection};