import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

export default class SongEntry extends Component {
    
    render() {
        return (
                <TouchableHighlight onPress={this.props.onPress} underlayColor='white'>
                    <View style={styles.entry}>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                        <Text style={styles.authorText}>{this.props.author}</Text>
                    </View>
                </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    entry: {
        paddingTop: 10,
        width: '100%',
        alignItems: 'flex-start',
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    authorText: {
        fontSize: 10,
    }

});