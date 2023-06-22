import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductDashboard from './components/plugins/store/ProductDashboard';
import Browser from './components/plugins/Browser';
import Payment from './components/plugins/Payment';

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

const browseEl = document.getElementById('browseplugin');

if(browseEl){
  const plugin = ReactDOM.createRoot(browseEl);
  const pluginid = browseEl.getAttribute('pluginid');
  const userid = browseEl.getAttribute('userid');

  plugin.render(
    <React.StrictMode>
      <Browser pluginId={pluginid} userId={userid} />
    </React.StrictMode>
  );

}

const cartEl = document.getElementById('browsepluginwithcart');

if(cartEl){
  const cart = ReactDOM.createRoot(cartEl);
  const pluginid = cartEl.getAttribute('pluginid');
  const userid = cartEl.getAttribute('userid');

  cart.render(
    <React.StrictMode>
      <Browser pluginId={pluginid} userId={userid} includeCart={true} />
    </React.StrictMode>
  );

}

const paymentEl = document.getElementById('paymentplugin');

if(paymentEl){
  const plugin = ReactDOM.createRoot(paymentEl);
  const pluginid = paymentEl.getAttribute('pluginid');
  const userid = paymentEl.getAttribute('userid');

  plugin.render(
    <React.StrictMode>
      <Payment />
    </React.StrictMode>
  );

}