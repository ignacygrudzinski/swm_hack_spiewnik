import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class SongLine extends Component {
    render() {
        return (
            <View style={styles.line}>
                <Text style={styles.verse}>{this.props.verse}</Text>
                <Text style={styles.chords}>{this.props.chords}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    line:{
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