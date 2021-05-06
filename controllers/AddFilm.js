import React from 'react'
import { StyleSheet, View, TextInput, TouchableHighlight } from 'react-native'
import { Button, AirbnbRating } from 'react-native-elements';

export default class AddFilm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            resume: '',
            comment: '',
            rating: 3,
            link: '',
            isFormValid: false
        };
    }

    validForm = () => {
        if (this.state.name.length > 1) {
            this.setState({ isFormValid: true })
        } else {
            this.setState({ isFormValid: false })
        }
    }

    handleNameChange = name => {
        this.setState({ name: name }, this.validForm)
    }

    handleResumeChange = resume => {
        this.setState({ resume: resume }, this.validForm)
    }

    handleCommentChange = comment => {
        this.setState({ comment: comment }, this.validForm)
    }

    handleRatingChange = rating => {
        this.setState({ rating: rating }, this.validForm)
        
    }

    handleLinkChange = link => {
        this.setState({ link: link }, this.validForm)
    }

    handleSubmit = () => {
        this.props.route.params.addMovie(this.state)
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Nom du film" value={this.state.name} onChangeText={this.handleNameChange} style={styles.input} />
                <TextInput placeholder="Résumé" value={this.state.resume} onChangeText={this.handleResumeChange} style={[styles.input, styles.resume]} />
                <TextInput placeholder="Commentaire" value={this.state.comment} onChangeText={this.handleCommentChange} style={styles.input} />
                {/** https://reactnativeelements.com/docs/rating/ */}
                <AirbnbRating
                    count={5}
                    reviews={["Nul à chier", "Bof", "OK", "Vraiment cool", "Extraordinaire"]}
                    defaultRating={3}
                    onFinishRating={this.handleRatingChange}
                />
                <TextInput placeholder="Lien IMDB" value={this.state.link} onChangeText={this.handleLinkChange} style={styles.input} />
                <Button title='Ajouter ce film à la liste' onPress={ () => this.handleSubmit()} disabled={!this.state.isFormValid} />
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
    input: {
        color: 'white',
        width: 300,
        padding: 10,
        margin: 20,
        borderBottomColor: "white",
        borderBottomWidth: 1
    },
    resume: {
        height: 100,
    },
    button: {
        height: 40,
        width: 160,
        backgroundColor: "#f2a365",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        marginBottom: 20,
    }
})
