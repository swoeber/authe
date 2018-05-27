import React, { Component } from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'

export default class LoginForm extends Component {

    state = { email: '', password: '', errorMessage : '', loading: false};

    onButtonPress() {
      const {email, password, loading} = this.state;

      if ( loading ) { return false }
      this.setState({errorMessage : '', loading: true});

      firebase.auth().signInWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.createAccount.bind(this));
    }

    createAccount() {
      const {email, password} = this.state;

      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
    }

    renderButton() {
      if ( this.state.loading ) {
        return <Spinner size={"small"}/>
      }

      return (
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
      )
    }

    onLoginSuccess() {
      this.setState({
        loading : false,
        email: '',
        password: '',
        errorMessage: ''
      });
    }

    onLoginFail() {
      this.setState({
        loading : false,
        password: '',
        errorMessage: 'Authentication Failed'
      });
    }

    render() {
      const {email, password, errorMessage} = this.state;
      return <Card>
        <CardSection>
          <Input
              placeholderTextColor={"#a0a0a0"}
              placeholder={'user@email.com'}
              autoCorrect={false}
              value={email}
              onChangeText={email => this.setState({email})}
              label={'Email'}
          />
        </CardSection>
        <CardSection>
          <Input
              secureTextEntry
              placeholderTextColor={"#a0a0a0"}
              placeholder={'password'}
              autoCorrect={false}
              value={password}
              onChangeText={password => this.setState({password})}
              label={'Password'}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {errorMessage}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    };
}

const styles = {
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
