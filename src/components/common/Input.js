import React from 'react';
import { TextInput, View, Text } from 'react-native';

export const Input = (props) => {
    const {containerStyle, labelStyle, inputStyle} = styles;
    const { label, value, onChangeText, autoCorrect, placeholder, placeholderTextColor, secureTextEntry } = props;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    )
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle : {
        color: '#ddd',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }, 
    inputStyle : {
        color: '#ddd',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        
    }
};