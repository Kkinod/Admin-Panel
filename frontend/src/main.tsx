import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './features/store';
// import { GlobalStyle } from './assets/styles/globalStyle.styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <GlobalStyle /> */}
      <App />
    </Provider>
  </React.StrictMode>
);
