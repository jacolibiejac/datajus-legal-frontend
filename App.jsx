import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import CheckoutPage from '@/pages/CheckoutPage';

function App() {
  return (
    <>
      <Helmet>
        <title>DatajusLegal - Produtos Jurídicos Especializados</title>
        <meta name="description" content="Plataforma especializada em produtos digitais para advogados. Acesse dados jurídicos atualizados com entrega automática." />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produto/:id" element={<ProductDetailPage />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;