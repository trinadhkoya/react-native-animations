import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export default class OpacityAnimation extends Component {
  state = {
    animation: new Animated.Value(1) //defaultother wise it wont appear
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 1000 // time to take effect
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1, //back to intialized value
        duration: 1000
      }).start();
    });
  };

  render() {
    const animatedStyles = {
      opacity: this.state.animation
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
    backgroundColor: "blue"
  }
});
