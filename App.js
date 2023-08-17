/*eslint-disable prettier/prettier*/
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/bottomTabs';
import Header from './navigation/header';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Header />
        <Tabs/>
      </NavigationContainer>
    );
  }
}

export default App;
