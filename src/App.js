import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Admin/Category/Category';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AllProduct from './components/Admin/Product/AllProduct';
import ProductAdd from './components/Admin/Product/ProductAdd/ProductAdd';
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import './_assets/css/bundle.css';
import './_assets/css/style.css';

function App() {

  return (
    <>

      <Header />
      
    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/shop' element={<Shop />} />
        
      {/* // Nasted Route */}
      <Route path='/dashboard' element={<Dashboard />}>
        
        <Route path='/dashboard/all-product' element={<AllProduct />} />
        <Route path='/dashboard/add-product' element={<ProductAdd />} />
        <Route path='/dashboard/category' element={<Category />} />

      </Route>
      
      <Route path='/*' element={<NotFound />} />
      {/* <Footer /> */}

    </Routes>
      
    </>
  );
}

export default App;
