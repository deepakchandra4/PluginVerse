import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddProduct from './components/plugins/store/AddProduct';

const rootEl = document.getElementById('root');

if(rootEl){
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const pluginEl = document.getElementById('plugin');

if(pluginEl){
  const plugin = ReactDOM.createRoot(pluginEl);
  plugin.render(
    <React.StrictMode>
      <AddProduct />
    </React.StrictMode>
  );

}