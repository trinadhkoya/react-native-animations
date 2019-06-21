import React, { Component } from "react";
import { StyleSheet, View, Animated, ScrollView } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0)
  };
  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ["rgba(0,0,0,0.9)", "rgba(0,0,0,0.2)"]
    });

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate
    };
    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation
                }
              }
            }
          ])}
        >
          <Animated.View style={[styles.content, backgroundStyle]} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    height: 3000
  }
});
