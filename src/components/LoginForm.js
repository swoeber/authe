import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common'

export default class LoginForm extends Component {

    state = { email: '', password: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    {/* <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
                        style={{height: 20, width: 100}} 
                    /> */}
                    <Input 
                        placeholderTextColor={"#a0a0a0"}
                        placeholder={'user@email.com'}
                        autoCorrect={false}
                        value={this.state.email}
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
                        value={this.state.email}
                        onChangeText={password => this.setState({password})}
                        label={'Password'} 
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )
    };
}
