import { Nav, Navbar, Form, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'
import { getAllCategories } from '../../../redux/categoriesReducer';
import shortid from 'shortid';

const NavBar = () => {
  const categories = useSelector(getAllCategories);

  return (
    <Navbar sticky='top' bg='light' variant='primary' expand='lg' className='mt-4 mb-4 rounded'>
      <Navbar.Brand className='ms-1 me-auto' as={NavLink} to='/'>
        <FontAwesomeIcon className='me-1' icon={faBabyCarriage} />Toys.store
      </Navbar.Brand>
      <Navbar.Toggle className='me-1' variant='primary' aria-controls='navbar' />
      {/* <FontAwesomeIcon icon={faCartShopping} variant='primary' /> */}
      <Navbar.Collapse id='navbar'>
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
              <NavDropdown.Item key={category + shortid()} as={NavLink} to={`/${category}`}>{category}</NavDropdown.Item>
            ))}
            {/* <NavDropdown.Item as={NavLink} to='/cart'>Toys</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/cart'>Wears</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/cart'>
              Something else here
            </NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link as={NavLink} to='/about'>Products</Nav.Link>
          <Nav.Link as={NavLink} to='/about'>About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;