import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import Layout from './layout/Layout.tsx';
import './assets/css/Main.css'

createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
  <Layout>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </Layout>
 </BrowserRouter>
)
