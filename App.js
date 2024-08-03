import React from 'react';
import {SafeAreaView} from 'react-native';
import Item from './components/item/Item';

const App = () => {
  return (
    <SafeAreaView>
      <Item name={'Table'} price={20} />
      <Item name={'Chair'} price={2000} />
      <Item name={'Desk'} price={200} />
    </SafeAreaView>
  );
};

export default App;
