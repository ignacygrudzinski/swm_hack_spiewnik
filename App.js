import React from 'react'

import {
    StyleSheet,
    View,
} from 'react-native'

import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <AppNavigator/>
        </View>
    )
  }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

/*
import SongList from './components/SongList.js';

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <SongList/>
            </View>
        )
    }

}

*/