import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing
} from "react-native";

export default class Interpolation extends Component {
  state = {
    animation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      easing: Easing.bounce
      // easing: Easing.back(2)
      // easing: Easing.elastic(2),
      // easing: Easing.easinBack
    }).start(() => {
      this.state.animation.setValue(0);
    });
  };

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      // outputRange: ["0deg", "180deg"],//will spin
      outputRange: ["20%", "100%"] //will spin
    });

    const animatedStyles = {
      transform: [
        { translateX: boxInterpolation, translateY: boxInterpolation }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Animated.Text style={[{ justifyContent: "center" }]}>
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
