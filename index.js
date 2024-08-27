/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {ScriptManager, Script, Federated} from '@callstack/repack/client';

const resolveURL = Federated.createURLResolver({
  containers: {
    app1: 'http://localhost:9000/[name][ext]',
    app2: 'http://localhost:9001/[name][ext]',
    module1: 'http://localhost:9002/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  console.log('scriptId:', scriptId);
  console.log('caller:', caller);
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
