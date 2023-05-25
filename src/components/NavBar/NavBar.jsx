import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav>
      

      
        <div className={styles.nav}>
        <h1>Concesionario</h1>
          <button className={styles.boton}>Autos</button>
          <button className={styles.boton}>Camionetas</button>
          <button className={styles.boton}>Motos</button>
          <button className={styles.boton}>Otros Servicios</button>
          <CartWidget />
        </div>
        
      
    </nav>
  );
};
export default NavBar;

