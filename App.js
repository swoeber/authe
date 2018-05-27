import React, { Component } from 'react';
import {View, } from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardSection, Card, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component {

    state = { loggedIn : null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBCN90kEIFQZt6rRovAt0KoippA03EiJPU',
            authDomain: 'authentication-f9e91.firebaseapp.com',
            databaseURL: 'https://authentication-f9e91.firebaseio.com',
            projectId: 'authentication-f9e91',
            storageBucket: 'authentication-f9e91.appspot.com',
            messagingSenderId: '184409613273'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({loggedIn : true})
            } else {
              this.setState({loggedIn : false})
            }
        })
    }

    renderContent() {
      switch (this.state.loggedIn) {
        case true :
          return (
              <Card>
                <CardSection>
                  <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                  </Button>
                </CardSection>
              </Card>
          );
        case false :
          return <LoginForm/>
        default :
          return <Spinner size={'large'} />;
      }
    }

    render() {
      return <View style={styles.appStyle}>
        <Header headerText={'Authentication'}/>
        {this.renderContent()}
      </View>
    }
}

const styles = {
    appStyle : {
      backgroundColor : "#414a4c",
      flex: 1
    }
};