import React from 'react';
import Drawer from 'react-native-drawer'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel />}
        >
        <MainView />
      </Drawer>
    )
  }
default class ControlPanel {
  constructor() {

  }
}
}
