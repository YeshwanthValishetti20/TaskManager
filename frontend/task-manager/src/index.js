import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';


const supabase = createClient(
  "https://bltpbyzckvksulhzvsqp.supabase.co",
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdHBieXpja3Zrc3VsaHp2c3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNTM0MTAsImV4cCI6MjAwOTcyOTQxMH0.oVNnvb1Dt_OlnLUVok9wI6KJjfXKurLyzT_q2XzlLBs'

);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
    <App />
    </SessionContextProvider>
  </React.StrictMode>
);


