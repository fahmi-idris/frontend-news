import React, { Component } from 'react';
import { Drawer, Button, View, Text } from 'native-base';
import Sidebar from './sidebar';

export default class DrawerMenu extends Component {
    render() {

    	closeDrawer = () => {
			this.drawer.root.close()
		};
		openDrawer = () => {
			this.drawer.root.open()
		};

        return (
		    <Drawer
	            ref={(ref) => { this.drawer = ref; }}
	            content={<Sidebar/>}
	            onClose={() => this.closeDrawer()} >
	        </Drawer>
        );
    }
}