import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import * as book from '../assets/json/songBook.json'

import SongView from '../components/SongView'

export default class SongScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('song', 'Piosenka').title,
      }
    }

  
  
    render() {
      console.log(this.props.navigation.getParam('song', 'def').title)
      const { navigation } = this.props;

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
  
