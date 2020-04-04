import '../styles/styles.scss';

import Collapses from '../components/Collapses';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from '../redux/store';

const Root = () => {
  return (
    <Provider store={store}>
      <Collapses />
    </Provider>
  );
};

export default Root;
