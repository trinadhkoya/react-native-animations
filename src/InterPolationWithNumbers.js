import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export default class InterPolationWithNumbers extends Component {
  state = {
    animation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 3000
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000
      }).start();
    });
  };

  render() {
    const animatedInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 300, 0]
    });

    const interpolatedInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 300, 400],
      outputRange: [1, 0.5, 2]
    });
    const translateXInterpolation = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50, 100, 100, 200, 300],
      outputRange: [20, -40, 50, -100, 205, 100, 400]
    });

    const backgroudnColorInterPolation = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50, 100, 100, 200, 300],
      outputRange: [
        "tomato",
        "cyan",
        "red",
        "black",
        "orange",
        "yellow",
        "white"
      ]
    });

    const animatedStyles = {
      transform: [
        { translateY: animatedInterpolate },
        { translateX: translateXInterpolation }
      ],
      opacity: interpolatedInterpolate,
      backgroundColor: backgroudnColorInterPolation
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#ff8800"
  }
});
