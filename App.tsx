/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';

const App1 = React.lazy(() => import('app1/App'));

function App(): React.JSX.Element {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView>
          <Text>Host App</Text>
          <React.Suspense fallback={<Text>Loading app1...</Text>}>
            <App1 />
          </React.Suspense>
        </SafeAreaView>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
