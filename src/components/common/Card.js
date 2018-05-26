import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const {containerStyle} = styles;
  return (
      <View style={containerStyle}>
        {props.children}
      </View>
  )
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#414a4c',
    borderBottomWidth: 0,
    backgroundColor: '#3b444b',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginTop: 10,
    marginRight: 5
  }
};

export {Card};