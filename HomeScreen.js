import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import SongList from '../components/SongList.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Home',  
      header: null,
      headerBackTitle: null
  };


  render() {
    return (
      <View style={styles.container}>
        <SongList navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
})
