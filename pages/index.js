import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Pay from "../packages/comps/Pay-section";
import Card from "../packages/comps/Card";
import Cart from "../packages/comps/Cart";
const { getData } = require("../packages/comps/db");

const foods = getData();

export default function Home() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id == food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <div
        className={`max-w-5xl m-auto mx-5 min-w-5xl ${
          showCheckout ? "hidden" : ""
        }`}
      >
        <h1 className="flex justify-center py-4 text-3xl font-bold">Food King</h1>
        <Cart cartItems={cartItems} />
        <div className="grid grid-cols-3 gap-2">
          {foods.map((food) => {
            return (
              <Card
                food={food}
                key={food.id}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            );
          })}
        </div>
        <div className="py-2 pt-8">
          <button
            type="button"
            className=" w-full max-w-3xl focus:outline-none text-white bg-green  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={() => {
              if (cartItems.length > 0) {
                setShowCheckout(true);
              }
            }}
          >
            VIEW ORDER
          </button>
        </div>
      </div>
      <div className={`${showCheckout ? "" : "hidden"}`}>
        <Pay cartItems={cartItems} showCheckout={showCheckout} setShowCheckout={setShowCheckout}/>
      </div>
    </>
  );
}
