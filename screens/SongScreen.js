import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import * as book from '../assets/json/songBook.json'

import SongView from '../components/SongView'

export default class SongScreen extends React.Component {
    static navigationOptions = {
        title: 'Song',
        header: null,
        headerBackTitle: null
    };
  
  
    render() {
      return (
        <View style={styles.container}>
          <SongView
              song={this.props.navigation.getParam('song', 'default')}
          />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  })
  
