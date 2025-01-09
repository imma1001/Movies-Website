import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function Index(){
  const queryClient= new QueryClient()
    return (
      <>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
       <App/>
       </QueryClientProvider>
      </BrowserRouter>
       
       </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index/>)
reportWebVitals();
