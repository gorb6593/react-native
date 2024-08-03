import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import MyText from './components/text/MyText';

const App = () => {
  return (
    <SafeAreaView>
      <Image
        source={require('./asset/images/test-image2.png')}
        style={{width: 100, height: 100, backgroundColor: 'red'}}
        resizeMode={'contain'}
      />
      <Image
        source={{
          uri: 'https://i.pinimg.com/474x/86/b3/bf/86b3bf1fe796de38564fb91b48a34e31.jpg',
        }}
        style={{width: 100, height: 100}}
      />
    </SafeAreaView>
  );
};

export default App;
