import React from 'react'

import {
    FlatList,
    StyleSheet,
    View,
    BackHandler,
    
} from 'react-native'

import * as book from '../assets/json/songBook.json'

import SongEntry from './SongEntry';



export default class SongList extends React.Component {

    state = {
        song: '',
    }

    _keyExtractor = (item) => item.title;

    _renderItem = ({item, key}) => (
        <SongEntry
            key={key}
            title={item.title}
            author={item.title}
            onPress={() => this.setState({song: item.title})}
        />
    )

    render() {

        if(this.state.song == '') {
            return (
                <FlatList
                    data={book.songs}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
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



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    songEntry: {
        flex: 1,
        color: 'black',
    }

})



/*
<View>
                    {this.state.show && ( 
                        <FlatList
                            data={ book.songs }
                            renderItem={ ({item, key}) => 
                                <Text key={key} style={styles.songEntry}>
                                    {item.title}
                                </Text>
                            }
                        />
                    )}
                </View>
                */

/*{this.state.show && ( 
        <Text>
            abcd
        </Text>
    )}
    */