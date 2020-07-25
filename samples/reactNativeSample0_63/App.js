import React from 'react';

import ReactNativePluginVerId, {TestComponent} from "@appliedrec/react-native-plugin-ver-id";

const App: () => React$Node = () => {
  return (<TestComponent verid={ReactNativePluginVerId}/>);
};

export default App;
