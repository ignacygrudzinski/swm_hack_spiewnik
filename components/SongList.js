import React from 'react'

import {
    FlatList,
    StyleSheet,
    View,
    BackHandler,
    
} from 'react-native'


import * as book from '../assets/json/songBook2.json'

import SongEntry from './SongEntry';



export default class SongList extends React.Component {

    state = {
        song: '',
    };

    _keyExtractor = (item) => item.title;

    _renderItem = ({item, key}) => {
        if(this.props.all === true) {
           return ( <SongEntry
                key={key}
                title={item.title}
                author={item.title}
                onPress={() => {
                    this.props.navigation.navigate('Song', {
                        song: item,
                    })
                }}
            />)
        }
    };

    render() {

        if(this.state.song === '') {
            return (
                <FlatList
                    data={book.songs}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem.bind(this)}
                />
            )
        }
        else{
            return (
                <View style={{backgroundColor: 'black', flex: 1}}>
                </View>
            )
        }
    }

}

