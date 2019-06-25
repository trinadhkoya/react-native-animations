import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "#cc0000",
    width: 200,
    height: 200,
    borderRadius: 5
  }
});

class MultiTap extends React.Component {
  static defaultProps = {
    onPress: () => null,
    numberOfTouches: 2,
    delay: 300
  };

  startPress = null;

  onStartShouldSetResponder = evt => {
    if (evt.nativeEvent.touches.length === this.props.numberOfTouches) {
      this.startPress = Date.now();
      return true;
    }

    return false;
  };

  onResponderRelease = () => {
    const now = Date.now();
    if (this.startPress && now - this.startPress > this.props.delay) {
      this.props.onPress();
    }
    this.startPress = null;
  };

  render() {
    return (
      <View
        onStartShouldSetResponder={this.onStartShouldSetResponder}
        onResponderRelease={this.onResponderRelease}
      >
        {this.props.children}
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MultiTap onPress={() => alert("double tap!")}>
          <TouchableHighlight onPress={() => alert("box tapped!")}>
            <Swiper style={styles.wrapper} showsButtons={true}>
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
          </TouchableHighlight>
        </MultiTap>
      </View>
    );
  }
}
