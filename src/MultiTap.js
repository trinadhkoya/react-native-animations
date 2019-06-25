import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  PanResponder
} from "react-native";

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
    delay: 1000
  };

  startPress = null;
  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      // onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log(evt, gestureState);
        if (evt.nativeEvent.touches.length === this.props.numberOfTouches) {
          this.startPress = Date.now();
          return true;
        }

        return false;
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        console.log(evt);
        console.log(gestureState);
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        const now = Date.now();
        if (this.startPress && now - this.startPress > this.props.delay) {
          this.props.onPress();
        }
        this.startPress = null;
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    });
  }

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
            <View style={styles.box} />
          </TouchableHighlight>
        </MultiTap>
      </View>
    );
  }
}
