import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text
} from "react-native";

export default class Dummy extends Component {
  state = {
    animation: new Animated.Value(1)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 100,
      duration: 1000
    }).start(() => {
      this.state.animation.setValue(0);
    });
  };

  render() {
    const someRandomValue = 10;
    // let addAnimation = Animated.add(this.state.animation, someRandomValue);
    let multiplyAnimation = Animated.multiply(
      this.state.animation,
      someRandomValue
    );

    const animatedStyles = {
      transform: [{ translateY: multiplyAnimation }]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text style={{ alignSelf: "center", textAlign: "center", flex: 1 }}>
              Hello
            </Text>
          </Animated.View>
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
    backgroundColor: "tomato"
  }
});
