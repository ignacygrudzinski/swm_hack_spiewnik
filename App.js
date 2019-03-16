import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import SongEntry from "./components/SongEntry"

export default class App extends Component {
  render() {
    return (
        <View style={{
            paddingTop: 60,
            flex: 1,
            flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'stretch',
        }}>
            <SongEntry title="Ściernisco" author="🅱️racia 🅱️olec"/>
            <SongEntry title="Janusz Tracz Theme" author="Ple🅱️ania"/>
            <SongEntry title="Jak zapomnieć" author="Jeden Siedem Osiem Osiem L"/>
        </View>
    );
  }
}
