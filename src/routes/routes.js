import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Layout from '../layout/Layout';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'checkout', element: <Checkout /> }
    ]
  }
]);
