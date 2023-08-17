/*eslint-disable prettier/prettier*/
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
{/**This is functional component version */}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/RecordScreen';
import AccountScreen from '../screens/AccountScreen';
import AnalysisScreen from '../screens/AnalysisScreen';
import BudgetScreen from '../screens/BudgetScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({ children, onPress }) => {
//     return (
//       <TouchableOpacity
//         style={{
//           top: -30,
//           justifyContent: 'center',
//           alignItems: 'center',
//           ...styles.shadow,
//         }}
//         onPress={onPress}
//       >
//         <View
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: 35,
//             backgroundColor: '#e32f45',
//           }}
//         >
//           {children}
//         </View>
//       </TouchableOpacity>
//     );
//   };


const Tabs = () =>{
    return (
        /** Bottom Navigation Bar*/
        <Tab.Navigator
        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            position: 'absolute',
            bottom: 15,
            left: 10,
            right: 10,
            elevation: 5,
            backgroundColor: '#ffffff',
            borderRadius: 20,
            height: 60,
            ...styles.shadow,
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}>
            {/*Icon with label inside the Bottom Navigation Bar, direct to homepage*/}
            <Tab.Screen name="Records" component={HomeScreen}
                options={{
                    tabBarIcon:({focused}) =>{
                        return (
                            <View style={styles.iconAlign}>
                            <Image
                                source={require('../assets/icons/transaction.png')}
                                resizeMode="contain"
                                style={[styles.iconSelectedFocus, { tintColor: focused ? '#e32f45' : '#748c94' }]}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Records</Text>
                        </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Analysis" component={AnalysisScreen}
                options={{
                    tabBarIcon:({focused}) =>{
                        return (
                            <View style={styles.iconAlign}>
                            <Image
                                source={require('../assets/icons/pie-chart.png')}
                                resizeMode="contain"
                                style={[styles.iconSelectedFocus, { tintColor: focused ? '#e32f45' : '#748c94' }]}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Analysis</Text>
                        </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Budget" component={BudgetScreen}
                options={{
                    tabBarIcon:({focused}) =>{
                        return (
                            <View style={styles.iconAlign}>
                            <Image
                                source={require('../assets/icons/budget.png')}
                                resizeMode="contain"
                                style={[styles.iconSelectedFocus, { tintColor: focused ? '#e32f45' : '#748c94' }]}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Budget</Text>
                        </View>
                        );
                    },
                }}
            />
            {/**Unused, do not delete*/}
            {/* <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarIcon:({focused}) =>{
                        return (
                            <Image
                            source={require('../assets/icons/plus.png')}
                            resizeMode="contain"
                            style={{
                                width:30,
                                height:30,
                            }}
                            />
                        );
                    },
                    tabBarButton: (props) => {
                        return <CustomTabBarButton {...props}/>;
                    },
              }}
            /> */}

            {/*Icon with label inside the Bottom Navigation Bar, direct to account page*/}
            <Tab.Screen name="Account" component={AccountScreen}
                options={{
                    tabBarIcon:({focused}) =>{
                        return (
                            <View style={styles.iconAlign}>
                            <Image
                                source={require('../assets/icons/wallet.png')}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height:25,
                                    tintColor: focused ? '#e32f45' : '#748c94' }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Accounts</Text>
                        </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Categories" component={CategoriesScreen}
                options={{
                    tabBarIcon:({focused}) =>{
                        return (
                            <View style={styles.iconAlign}>
                            <Image
                                source={require('../assets/icons/tag.png')}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height:25,
                                    tintColor: focused ? '#e32f45' : '#748c94' }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Categories</Text>
                        </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    /**Styles for Bottom Navigation Bar */
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation:5,
    },
    /**Icon styles and sizing */
    iconAlign: {
        alignItems:'center',
        justifyContent:'center',
        top:3,
    },
    /**Icon styles when user selected */
    iconSelectedFocus: {
        width:25,
        height:25,
    },
});
export default Tabs;
