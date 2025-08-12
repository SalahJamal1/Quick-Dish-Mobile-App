import React from "react";
import loading from "../assets/loading.json";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
export function Loader() {
  return (
    <View style={styles.view}>
      <LottieView
        source={loading}
        loop
        autoPlay
        style={{
          height: 300,
          width: 300,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
