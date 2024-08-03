import React from 'react';
import {Text} from 'react-native';
import style from './style';

const MyText = () => {
  const handleTextClick = () => {
    alert('click!!');
  };
  return (
    <Text
      style={[style.text, style.text1, {color: 'green'}]}
      onPress={() => handleTextClick()}>
      Hello, React Native 프로젝트!
    </Text>
  );
};

export default MyText;
