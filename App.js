import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {AppLoading} from 'expo';
import { enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();



export default function App() {



  return <MealsNavigator />;
}
