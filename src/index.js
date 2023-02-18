import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  
);

//npm install @reduxjs/toolkit
// npm i prop-types
// npm i notiflix
// npm i nanoid
//npm i react-icons
//npm i formik
//npm install --save styled-components
//npm i yup
// npm i redux-persist