import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class Transactions extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCamPermission: null,
      scanned: false,
      scanData: '',
      buttonStatus: "normal",
      scannedBookID: '',
      scannedStudentID: ''
    }
  }
  getCamPermission = async (id) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCamPermission: status == "granted", buttonStatus: id, scanned: false });
  }
  handleScan = async ({ type, data }) => {
    this.setState({ scanned: true, scanData: data, buttonStatus: "normal" })
  }
  render() {
    const hasCamPermission = this.state.hasCamPermission;
    const scanned = this.state.scanned;
    const buttonStatus = this.state.buttonStatus;
    if (buttonStatus !== "normal" && hasCamPermission) {
      return (
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleScan()}
          style={StyleSheet.absoluteFillObject}
        />
      )
    } else if (buttonStatus == "normal") {
      return (
        <View style={styles.container}>
          <View>
            <Image source={require('../assets/booklogo.jpg')}
              style={{ width: 60, height: 60 }} />
            <Text>Library Manager</Text>
          </View>
          <View>
            <TextInput placeholder="Book ID" value={this.state.scannedBookID} />
            <TouchableOpacity style={styles.button} onPress={() => this.getCamPermission("bookid")}>
              <Text style={{ color: "white" }}>Scan</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput placeholder="Student ID" value={this.state.scannedStudentID} />
            <TouchableOpacity style={styles.button} onPress={() => this.getCamPermission("studentid")}>
              <Text style={{ color: "white" }}>Scan</Text>
            </TouchableOpacity>
          </View>
          <Text>Issue</Text>
          <Text>
            {hasCamPermission == true ? this.state.scanData : "Request Camera Permission"}
          </Text>


        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0c0c0c'
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'red',
  }
})