import React from 'react';
import { View, Text, TouchableOpacity,SafeAreaView } from 'react-native';
import Index from './src/screens/index'
import MainStore from './src/store/MainStore';
import { Provider } from 'mobx-react';

export default class App extends React.Component {

  render() {
    return (
      <Provider MainStore={MainStore}>
      <SafeAreaView>
        <Index></Index>
      </SafeAreaView>
      </Provider>
    )
  }

}