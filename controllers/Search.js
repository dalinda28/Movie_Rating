import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator} from 'react-native'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'

class Search extends React.Component{
    
    constructor(props){
        super(props)
        this.page = 0
        this.totalPages = 0
        // l'API TMDB
        this.state = {
            films: [],
            isLoading: false
        }
        this.searchedText= ""
    }
    _loadFilms(){
        if (this.searchedText.length > 0){
            this.setState({isLoading: true})
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({ 
                    films: [...this.state.films, ...data.results ],
                    isLoading: false
                })
            }) 
        }  
    }

    _displayLoading(){
        if (this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }
    _searchTextInputChanged(text){
        this.searchedText= text
    }
    _searchFilms(){
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        }, ()=> {
            this._loadFilms()
        })
        
    }

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }

    render(){
        console.log("RENDER")
        return (
            <View style={styles.main_container}>
                <TextInput 
                    onChangeText={(text)=> this._searchTextInputChanged(text)}
                    onSubmitEditing={()  => this._searchFilms()} 
                    style={styles.input}
                    placeholder="Titre du film"
                />
                <Button 
                    title="Rechercher" 
                    onPress={() => this._searchFilms()}>
                </Button>

                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
                    onEndReachedThreshold= {0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages){
                            this._loadFilms()
                        }
                    }}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor:'black'
      },
    input: {
        color: 'white',
        width: 300,
        padding: 10,
        margin: 20,
        borderBottomColor: "white",
        borderBottomWidth: 1
    },
    loading_container: {
        position: 'absolute',
        left:0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
  })
export default Search