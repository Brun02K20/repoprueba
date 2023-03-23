import React, { useContext } from "react";
import "../styles/OrderItem.scss";

import close from "@icons/icon_close.png";

import { AppContext } from "../context/AppContext";

const OrderItem = ({ product }) => {
  const { removeFromShopCart } = useContext(AppContext);

  const handleRemoveFromShopCart = (product) => {
    removeFromShopCart(product);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={close}
        alt="close"
        className="closeImg"
        onClick={() => handleRemoveFromShopCart(product)}
      />
    </div>
  );
};

export default OrderItem;
