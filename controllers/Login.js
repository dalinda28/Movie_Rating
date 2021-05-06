import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Image } from 'react-native'
import { Button } from 'react-native-elements';


export default class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bienvenue dans Movie Rating</Text>
                    <br/>
                    <Image
                        style={{
                            height: 60,
                            width: 60
                        }}
                        source={
                            require('../assets/icon_film.png')
                        } />
                </View>
                <View style={styles.formContainer}>
                    <TextInput placeholder="Pseudo" style={styles.input} />
                    <TextInput placeholder="Mot de passe" secureTextEntry={true} style={styles.input} />
                    <TouchableHighlight style={styles.button}>
                        <View>
                            <Button buttonStyle={styles.button} title="Connexion" onPress={() => this.props.navigation.navigate('Home')}></Button>
                        </View>
                    </TouchableHighlight>
                </View>
                <Text style={styles.title2}>By Dalinda ALOUI</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 0.6,
    },
    title: {
        color: 'white',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 0,
    },
    title2: {
        color: 'white',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 0,
        marginBottom: 10,
    },
    input: {
        color: 'white',
        width: 200,
        padding: 10,
        margin: 20,
        borderBottomColor: "white",
        borderBottomWidth: 1
    },
    button: {
        margin: 5,
        backgroundColor: 'red',
    },
});
