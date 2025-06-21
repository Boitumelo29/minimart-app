import './App.css';
import Home from './pages/Home';
import {CartProvider} from './context/CartContext';
import Navbar from './componets/Navbar';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Home />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
