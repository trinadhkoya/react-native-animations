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
   
  };

  render() {
    const animatedStyles = {
     
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
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    
  }
});
