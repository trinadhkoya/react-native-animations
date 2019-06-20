import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text
} from "react-native";

// const { height, width } = Dimensions.get("window");

export default class HeightAndWidthAnimation extends Component {
  state = {
    animation: new Animated.Value(150) // set initial height and width to 150
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300, // when animation started make it to 300 from 150
      duration: 1000
    }).start(() => {
      this.state.animation.setValue(150); //back to default value of 150
    });
  };

  render() {
    
    const animatedStyles = {
      width: this.state.animation,
      height: this.state.animation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text style={{ alignSelf: "center", textAlign: "center", flex: 1 }}>
              Lorem Ipsum is simply dummy text of the printing and types
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
    // width: 150,
    // height: 150,
    backgroundColor: "blue"
  }
});
