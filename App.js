import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.tff')
  });
} 


export default function App() {
const [fontLoaded, setFontLoaded] = useState(false);

if (!fontLoaded) {
  return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
}

  return (
    <View>
      <CategoriesScreen />
    </View>
  );
}
