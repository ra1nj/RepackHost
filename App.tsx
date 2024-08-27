/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Federated} from '@callstack/repack/client';

const App1 = React.lazy(() => Federated.importModule('app1', './App'));

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>Host App</Text>
      <React.Suspense fallback={<Text>Loading app1...</Text>}>
        <App1 />
      </React.Suspense>
    </SafeAreaView>
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
