import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css';

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
const { categoryId } = useParams()

  
  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])
  

  return (
    <div className={styles.titulo}>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
};



export default ItemListContainer;
