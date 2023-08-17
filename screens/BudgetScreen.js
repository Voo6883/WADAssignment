/*eslint-disable prettier/prettier*/
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

let monthIndex = new Date().getMonth();
let yearIndex = new Date().getFullYear();
const monthInWords = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

class BudgetScreen extends Component {
  render() {
    const monthName = monthInWords[monthIndex];
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Budgeted Categories: {monthName}, {yearIndex}</Text>

          <Text style={styles.title2}>Not Budgeted this month</Text>
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
  title: {
    flex: 2,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
  title2: {
    flex: 3,
    textAlign:'center',
    color: 'black',
    fontWeight:'bold',
  },
});

export default BudgetScreen;

