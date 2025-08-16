import { View, Text } from 'react-native';
import React, { useState, useRef } from 'react';
import { styles } from './style';

export const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };
  return (
    <View style={[styles.badge, tabWidth]}>
      <Text
        ref={textRef}
        onTextLayout={event => {
          const firstLineWidth = event.nativeEvent.lines[0].width;
          setWidth(firstLineWidth);
        }}
        style={[styles.title, props.isInactive && styles.inactiveTitle]}
      >
        {props.title}
      </Text>
    </View>
  );
};
