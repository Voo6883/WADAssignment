/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchClicked: false,
    };
  }

  handleSearchClick = () => {
    this.setState({ isSearchClicked: true });
    setTimeout(() => {
      this.setState({ isSearchClicked: false });
    }, 200);
  };

  render() {
    const { isSearchClicked } = this.state;
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        height:60,
        backgroundColor:'aliceblue',
      }}>
        <TouchableOpacity onPress={{/* */}}>
          <Image
            source={require('../assets/icons/menu.png')}
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
        {/** Title of the App */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 200 }}>MyWallet</Text>
        {/** Click and direct to search interface, function: search record [match month || day || year || description] */}
        <TouchableOpacity onPress={this.handleSearchClick}>
          <Image
            source={require('../assets/icons/search.png')}
            resizeMode="contain"
            style={[
              styles.iconSelectedFocus,
              isSearchClicked ? { tintColor: 'red' } : null,
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconSelectedFocus: {
    width: 25,
    height: 25,
  },
});

export default Header;
