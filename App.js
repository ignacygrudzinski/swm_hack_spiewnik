import React, { Component } from 'react';
import {
    Alert,
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
    ScrollView
} from 'react-native';
import SongView from "./components/SongView"

export default class App extends Component {
  render() {
    return (
        <SongView song={{
            title: "Szanta panien i mężatek",
            author: "Jakiś zbok",
            category: [
                "shanties",
                "obscene",
            ],
            info: "This is very old shanties with deep meaning",
            lines: [
                {
                    text: "Lorem ipsum qui rem dolor",
                    chords: "A B C D",
                },
                {
                    text: "Lorem ipsum qui rem dolor",
                    chords: "E F G",
                },
                {
                    text: "Lorem ipsum qui rem dolor",
                    chords: "H I J K",
                },
                {
                    text: "Lorem ipsum qui rem dolor",
                    chords: "L M N",
                }
            ]
        }}/>
    );
  }
}

const styles = StyleSheet.create({
    line:{
        marginTop: 60,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    verse:{
        width:'75%',
        fontSize: 15,
        textAlign: 'left',
        color: 'black',
        paddingLeft: 15
    },

    chords:{
        width:'25%',
        fontSize: 15,
        textAlign: 'right',
        color: 'gray',
        paddingRight: 15
    }
})