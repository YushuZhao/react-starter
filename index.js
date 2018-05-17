import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import SettingsPanel from './src/containers/SettingsPanelContainer';

import SettingsVersion from './src/components/SettingsVersion'

ReactDOM.render(
    <Provider store={store}>
          <SettingsPanel />
          {/* <SettingsVersion /> */}
    </Provider>, 
    document.getElementById('root')
);
