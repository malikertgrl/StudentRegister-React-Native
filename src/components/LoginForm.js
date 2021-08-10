import React, { Component } from "react";
import { TextInput, View } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Button, Card, CardSection, Spinners } from "../general"

class LoginForm extends Component {
    // state = { email: "", password: "", loading: false }


    clickLogin() {
        const { email, password } = this.props; 
        this.props.loginUser({ email, password })

    }

    // loginSucces = () => {
    //     this.setState({ loading: true })
    //     console.log("succes");

    // }

    // loginFail = () => {

    //     console.log("fail");
    //     this.setState({ loading: false })
    //     Alert.alert(
    //         "UYARI",
    //         "Kullanıcı Adı veya şifre hatalı!",
    //         [
    //             {
    //                 text: "Tamam",
    //                 onPress: () => console.log("ok Pressed"),

    //             }
    //         ]
    //     );




    // }

    renderButton = () => {
        if (!this.props.loading) {
            return (
                <Button onPress={this.clickLogin.bind(this)}>Giriş Yap</Button>
            )
        }
        return <Spinners />;
    }

    render() {
        //   console.log(`email ` + this.props.email); sor

        // console.log("formemail: ", this.props.email);
        // console.log(this.props.password);

        return (
            <View style = {{marginTop:60}}>

           
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="E-mail"
                        style={styles.inputStyle}
                        value={this.props.email}
                        onChangeText={email => this.props.emailChanged( email )}
                       

                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        secureTextEntry
                        placeholder="Password"
                        style={styles.inputStyle}
                        value={this.props.password}
                        onChangeText={password => this.props.passwordChanged( password )}

                    />
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
            </View>
        )
    }
}

const styles = {


    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }

}

const mapStateToProps = ({ AuthenticationResponse }) => {
    const { email, password, loading } = AuthenticationResponse;
    return {
        email,
        password,
        loading
    }
}


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);