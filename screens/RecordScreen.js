/*eslint-disable prettier/prettier*/
/* eslint-disable no-alert*/
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class RecordScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Record Screen</Text>
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
    backgroundColor: 'azure',
  },
});

export default RecordScreen;
