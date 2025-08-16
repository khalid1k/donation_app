import { View, Text, Pressable } from 'react-native';
import React, { useState, useRef } from 'react';
import { styles } from './style';

export const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[styles.tab, props.isInactive && styles.inactiveTab, tabWidth]}
      onPress={() => props.onPress()}
    >
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
    </Pressable>
  );
};
