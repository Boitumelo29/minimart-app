import './App.css';
import {CartProvider} from './context/CartContext';
import Navbar from './componets/Navbar';
import { AuthProvider } from './context/AuthContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
