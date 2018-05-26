import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;
   return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ headerText }</Text>
    </View>
   )
};

const styles = {
  textStyle : {
    fontSize: 20,
    color: '#ddd'
  },
  viewStyle : {
    backgroundColor: "#232b2b",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export {Header};