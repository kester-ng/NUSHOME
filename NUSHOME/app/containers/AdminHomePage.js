import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Container, Text } from "native-base";
import { Card, CardSection, Input, Button, ToggleInput } from "../common";
import MyHeader from "../components/header";

export default class AdminHomePage extends Component {
  render() {
    return (
      <View>
        <Text>Admin Home Page</Text>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate("CreateEvent")}>
            Create new event
          </Button>
        </CardSection>
      </View>
    );
  }
}
