import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(20)
  };
  componentDidMount() {}

  doSomeThing = () => {
    Animated.timing(this.state.animation, {
      toValue: 100,
      duration: 1000
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 200,
        duration: 1000
      });
    });
  };

  render() {
    const animatedInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 2]
    });

    const animatedStyles = {
      height: animatedInterpolation
    };

    return (
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={this.doSomeThing}
      >
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
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
    width: 200,
    backgroundColor: "tomato",
    height: 200
  }
});
