import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductDashboard from './components/plugins/store/ProductDashboard';

const rootEl = document.getElementById('root');

if(rootEl){
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const pluginEl = document.getElementById('storeplugin');

if(pluginEl){
  const plugin = ReactDOM.createRoot(pluginEl);
  const pluginid = pluginEl.getAttribute('pluginid');
  const userid = pluginEl.getAttribute('userid');

  plugin.render(
    <React.StrictMode>
      <ProductDashboard />
    </React.StrictMode>
  );

}