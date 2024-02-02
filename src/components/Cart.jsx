import React from 'react';
import { useProduct } from "../context/ProductContext";
import classes from "./Style.module.css";
const Cart = () => {
    const { state } = useProduct();
    const total = state.cart.reduce((acc, curr) => {
      return acc + (curr.lq + curr.mq + curr.sq) * curr.price;
    }, 0);
  
    return <div>Cart: {state.counter} Total: {total}</div>;
  };
  
  export default Cart