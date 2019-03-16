import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import SongList from '../components/SongList.js';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Bookmarks',
    };

    render() {
        return (
            <View style={styles.container}>
                <SongList all={false} navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
