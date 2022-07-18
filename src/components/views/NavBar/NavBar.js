import { Nav, Navbar, Form, Button, NavDropdown, ButtonGroup } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSplotch, faSearch, faBars, faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'
import { getAllCategories } from '../../../redux/categoriesReducer';
import styles from './NavBar.module.scss';
import shortid from 'shortid';

const NavBar = () => {
  const categories = useSelector(getAllCategories);

  return (
    <Navbar sticky='top' bg='light' variant='primary' expand='lg' className={`mt-4 mb-4 ${styles.root}`}>
      <Navbar.Brand className='ms-1 me-auto' as={NavLink} to='/'>
        <FontAwesomeIcon className='me-1' icon={faSplotch} />Toys.store
      </Navbar.Brand>
      <ButtonGroup aria-label="Basic example" className={styles.userCartBtns}>
        <Button as={Link} to='/cart' variant="link">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Button>
        <Button as={Link} to='/cart' variant="link">
          <FontAwesomeIcon icon={faBasketShopping} size="lg" />
        </Button>
      </ButtonGroup>
      <Navbar.Toggle className={`me-1 ${styles.toggleIcon}`} variant='primary' aria-controls='navbar'>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </Navbar.Toggle>
      <Navbar.Collapse id='navbar' className='p-1'>
        <Form className="d-flex mx-auto">
          <Form.Control
            type="search"
            placeholder="I want to find..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <NavDropdown title="Categories" id="navbarScrollingDropdown">
            {categories.map(category=> (
              <NavDropdown.Item key={category + shortid()} as={NavLink} to={`/category/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link as={NavLink} to='/allProducts'>Products</Nav.Link>
          <Nav.Link as={NavLink} to='/about'>About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;