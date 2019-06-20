import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
  Dimensions
} from "react-native";

const { height, width } = Dimensions.get("window");

export default class TranslatePosition extends Component {
  state = {
    animation: new Animated.Value(1) //defaultother wise it wont appear
  };

  // first it travels in (-50,50) direction then it will go (-100,100)
  //positive values go down and negative values go down
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: width/2, //based on translate direction it will travel ,till
      duration: 1000 // time to take effect
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0, //back to intialized value
        duration: 1000
      }).start();
      // this.state.animation.setValue(0);//we can write like this also
    });
  };

  render() {
    //for the positive values it go
    const animatedStyles = {
      transform: [
        { translateX: this.state.animation }, //X Directions,
        { translateY: this.state.animation } //Y direction
      ]
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
    backgroundColor: "blue"
  }
});
