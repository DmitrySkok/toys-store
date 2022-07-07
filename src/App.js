import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

/* PAGES */
import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Cart from './components/pages/Cart/Cart';
import Order from './components/pages/Order/Order';

/* VIEWS */
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';

/* FEATURES */
import SingleProduct from './components/features/SingleProduct/SingleProduct';
import SingleCategory from './components/features/SingleCategory/SingleCategory';

const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/category/:categoryName" element={<SingleCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
