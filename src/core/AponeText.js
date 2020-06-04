import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export class AponeText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {content, style} = this.props;
    return (
      <Text {...this.props} style={[{fontSize: 18, style}]}>
        {content}
      </Text>
    );
  }
}
