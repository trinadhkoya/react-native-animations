import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export default class Interpolation extends Component {
  state = {
    animation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000
      })
    ]).start();
  };

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      // outputRange: ["0deg", "180deg"],//will spin
      outputRange: ["20%", "100%"] //will spin
    });
    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#000", "#fff"]
    });
    const heightInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      // outputRange: ["0deg", "180deg"],//will spin
      outputRange: ["10%", "100%"] //will spin
    });
    const widthInerpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["10%", "100%"]
    });

    const boxStyles = {
      width: widthInerpolation,
      height: heightInterpolation
    };

    const animatedStyles = {
      transform: [{ rotate: boxInterpolation }]
    };
    const textAnimatedStyles = {
      color: colorInterpolation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles, boxStyles]}>
            <Animated.Text
              style={[textAnimatedStyles, { justifyContent: "center" }]}
            >
              TinMen
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato"
  }
});
