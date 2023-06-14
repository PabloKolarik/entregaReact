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
        <NavLink to={'/category/medialuna'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Medialuna</NavLink>
        <NavLink to={`/category/pan`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pan</NavLink>
        <NavLink to={`/category/galleta`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Galleta</NavLink>
        <NavLink to={`/category/torta`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Torta</NavLink>

        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar;

