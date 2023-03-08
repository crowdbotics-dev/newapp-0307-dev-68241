import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const BlankScreen3327 = () => {
  return <View style={_styles.BlankScreen3327}>
      <ImageBackground style={_styles.DazZoHsP} source={require("./Recipeful(1).png")} resizeMode="cover"></ImageBackground></View>;
};

export default BlankScreen3327;

const _styles = StyleSheet.create({
  BlankScreen3327: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  DazZoHsP: {
    width: 107,
    height: 62
  }
});