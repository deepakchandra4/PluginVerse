import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import app_config from '../../config';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';

const GeneratePlugin = () => {
  const { pluginData } = app_config;
  const { index } = useParams();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [selPlugin, setSelPlugin] = useState(pluginData[index]);

  const getPluginCode = () => `<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
  crossorigin="anonymous"
/>
<div id="${selPlugin.selectorid}" userid="${currentUser._id}" pluginid=""></div>
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"
></script>`;

  //   const handleCopyCode = () => {
  //     copyToClipboard(getPluginCode());
  //     toast.success('Code copied!');
  //   };

  return (
    <div>
      <header
        className="top-header"
        style={{ backgroundImage: `linear-gradient(to right, black, #16004873), url('https://www.skunexus.com/hubfs/essential-ecommerce-website-tools.jpg')` }}
      >
        <div className="container" style={{ padding: '100px 0' }}>
          <h1 className="fw-bold text-white">Custom E-Commerce Plugins</h1>
        </div>
      </header>

      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>Plugin Generator</h2>
          </div>
          <div className="card-body">
            <p>Plugin Name</p>
            <h2 className="mb-4">{selPlugin.name}</h2>

            <p>Plugin Description</p>
            <p className="mb-4">{selPlugin.description}</p>

            <div className="code-container">
              <CopyToClipboard text={getPluginCode()} onCopy={() => toast.success('plugin code copied')}>
                <button className="copy-btn">
                  <i class="fas fa-copy    "></i>
                </button>
              </CopyToClipboard>
              <SyntaxHighlighter language={'html'}>{getPluginCode()}</SyntaxHighlighter>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePlugin;
