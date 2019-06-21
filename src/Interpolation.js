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
        toValue: 2,
        duration: 1000
      })
    ]).start();



  };

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });
    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#000", "#fff"]
    });

    const animatedStyles = {
      transform: [{ rotate: boxInterpolation }]
    };
    const textAnimatedStyles = {
      color: colorInterpolation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Animated.Text
              style={[textAnimatedStyles, { justifyContent: "center" }]}
            >
              Trinadh Koya
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
