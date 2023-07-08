import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/'>
        <h3 className='titulo'>Panaderia</h3>
      </Link>
      <div className='Categories'>
        <NavLink to={'/category/factura'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Facturas</NavLink>
        <NavLink to={`/category/pan`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pan</NavLink>
        <NavLink to={`/category/galleta`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Galletas</NavLink>

      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;

