import 'intl';
//import 'intl/locate-data/jsonp/pt-BR';
import './node_modules/intl/locale-data/jsonp/pt-BR'
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './src/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
