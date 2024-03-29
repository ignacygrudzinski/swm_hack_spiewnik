import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import SongLine from "./SongLine"

export default class App extends Component {

    render() {
        return (
            <View style={styles.vertical}>
                <ScrollView style={styles.vertical}>
                    {
                        this.props.song.lines.map((line, key) =>
                            <SongLine verse={line.text} chords={line.chords} key={key}/>
                        )
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop:30,
        margin: 10
    },

    vertical:{
        flex:1,
        flexDirection: 'column'
    },
})