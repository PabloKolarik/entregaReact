import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav>
      <h1>Consesionario</h1>

      
        <div>
          <button>Autos</button>
          <button>Camionetas</button>
          <button>Motos</button>
          <button>Otros Servicios</button>
        </div>
        <CartWidget />
      
    </nav>
  );
};
export default NavBar;
