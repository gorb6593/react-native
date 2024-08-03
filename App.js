import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 5,
          borderTopWidth: 20,
          borderBottomWidth: 30,
          borderColor: '#d00f0f',
          borderRadius: 10,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 30,
        }}>
        <Text>진짜 div가 없네123..</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
