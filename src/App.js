import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export default class animations extends Component {
  constructor(props) {
    super(props);
    this.state = { animation: new Animated.Value(1) };
  }

  startArnimation = () => {
    Animation.timing(this.state.animation, {
      toValue: 0,
      duration: 300
    })
      .start(() => {
        Animation.timing(this.state.animation, {
          toValue: 0,
          duration: 300
        });
      })
      .start();
  };

  render() {
    const animatedStyle = {
      opacity:this.state.animation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startArnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#ff8800"
  }
});
