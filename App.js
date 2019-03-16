import React from 'react'

import {
    View,
    StyleSheet,
} from 'react-native'

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


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})