/*eslint-disable prettier/prettier*/
import  React, {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Export from '../screens/ExportRecordScreen';
import Delete from '../screens/DeleteRecords';


const Drawer = createDrawerNavigator();

class sideDrawer extends Component{
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Export records" component={Export}/>
                <Drawer.Screen name="Delete & Reset" component={Delete}/>
            </Drawer.Navigator>
        );
    }
}

export default sideDrawer;
