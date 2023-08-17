/*eslint-disable prettier/prettier*/
/* eslint-disable no-alert*/
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class CategoriesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Categories Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button clicked')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default CategoriesScreen;
