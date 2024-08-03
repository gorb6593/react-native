import React from 'react';
import {Text} from 'react-native';
import style from './style';

const MyText = () => {
  return (
    <Text style={[style.text, style.text1]}>Hello, React Native 프로젝트!</Text>
  );
};

export default MyText;
