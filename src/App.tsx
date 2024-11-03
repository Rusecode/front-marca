import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header'; // Atualize o caminho para o Header
import Footer from './layout/Footer'; // Atualize o caminho para o Footer
import ProductList from './components/product/ProductList'; // Mantenha o caminho do ProductList

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Adiciona o cabeçalho */}

        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </main>

        <Footer /> {/* Adiciona o rodapé */}
      </div>
    </Router>
  );
};

export default App;
