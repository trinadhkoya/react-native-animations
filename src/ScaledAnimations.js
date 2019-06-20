import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

// const { height, width } = Dimensions.get("window");

export default class ScaledAnimation extends Component {
  state = {
    animation: new Animated.Value(1) //defaultother wise it wont appear
  };

  // first it travels in (-50,50) direction then it will go (-100,100)
  //positive values go down and negative values go down
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2, //negative values flips the view and content as well 
      duration: 1000 // time to take effect
    }).start(()=>{
      this.state.animation.setValue(1);//back to 1
    });
  };

  render() {
    //for the positive values it go
    const animatedStyles = {
      transform: [
        // { scale: this.state.animation }, //scaled in both direction X and Y
        // { scaleX: this.state.animation }, //scaled in both direction X and Y
        { scaleY: this.state.animation } //scaled in both direction X and Y
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
