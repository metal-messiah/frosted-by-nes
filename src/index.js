import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';

const options = {
  init:{distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}},
  loader_config:{accountID:"3684110",trustKey:"3684110",agentID:"1120254247",licenseKey:"NRJS-ea1417379fae1fefced",applicationID:"1120254247"},
  info:{beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-ea1417379fae1fefced",applicationID:"1120254247",sa:1}
  
}
new BrowserAgent(options)

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
