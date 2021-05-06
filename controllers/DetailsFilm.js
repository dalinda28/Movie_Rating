import React from 'react'
import { StyleSheet, View, TextInput, TouchableHighlight, Text, Linking } from 'react-native'
import { Button, AirbnbRating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DetailsFilm extends React.Component {

    constructor(props) {
        super(props)
        this.props.navigation.setOptions({ title: this.props.route.params.movie.name })
    }

    /** https://reactnative.dev/docs/linking */
    imdb() {
        Linking.openURL(this.props.route.params.movie.link)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Titre</Text>
                <Text style={styles.input}>{this.props.route.params.movie.name}</Text>
                <Text style={styles.title}>Résumé</Text>
                <Text style={styles.input}>{this.props.route.params.movie.resume}</Text>
                <Text style={styles.title}>Commentaire</Text>
                <Text style={styles.input}>{this.props.route.params.movie.commentaire}</Text>
                <AirbnbRating
                    reviews={["Nul à chier", "Bof", "OK", "Vraiment cool", "Extraordinaire"]}
                    defaultRating={this.props.route.params.movie.rating} isDisabled={true} />
                <TouchableOpacity style={styles.button} onPress={() => this.imdb()}>
                    <Text style={styles.imdb}>IMDb</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#ececec',
        borderRadius: 10,
        width: 300,
        padding: 10,
        margin: 20,
    },
    title: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 0,
        fontWeight: 'bold',
        fontSize: 30,
    },
    button: {
        height: 60,
        width: 160,
        borderRadius: 3,
        backgroundColor: "#f3ce13",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imdb: {
        fontWeight: 'bold',
        fontSize: 24
    }
})