import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MemberstackProvider } from '@memberstack/react';

const config = { publicKey: 'pk_eafb622cdd8c558500c5' };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemberstackProvider config={config}>
      <App />
    </MemberstackProvider>
  </React.StrictMode>
);