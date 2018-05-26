import React, { Component } from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component {
    componentWilleMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBCN90kEIFQZt6rRovAt0KoippA03EiJPU',
            authDomain: 'authentication-f9e91.firebaseapp.com',
            databaseURL: 'https://authentication-f9e91.firebaseio.com',
            projectId: 'authentication-f9e91',
            storageBucket: 'authentication-f9e91.appspot.com',
            messagingSenderId: '184409613273'
          });
    }
    render() {
        return (
            <View style={styles.appStyle}>
                <Header headerText={'Authentication'} />
                <LoginForm />
            </View>
        )
    }
}

const styles = {
    appStyle : {
      backgroundColor : "#414a4c",
      flex: 1
    }
};