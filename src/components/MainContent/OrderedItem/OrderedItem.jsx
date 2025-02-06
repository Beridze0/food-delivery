import React, { useEffect, useState } from "react";
import "./OrderedItem.css";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineEditOff } from "react-icons/md";

const OrderedItem = ({ mealDetails }) => {
  const [editWindow, setEditWindow] = useState(false);
  const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem(`quantity-${mealDetails?.idMeal}`)) || 1);

  useEffect(() => {
    localStorage.setItem(`quantity-${mealDetails?.idMeal}`, quantity);
}, [quantity, mealDetails?.idMeal]);

  return (
    <div className="order-items">
      <div className="ordered-food">
        <div className="ordered-food-img-container">
          <img src={mealDetails?.strMealThumb} className="ordered-food-img" />
        </div>

        <div className="ordered-food-details">
          <div className="ordered-food-title">
            <p>{mealDetails?.strMeal}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="ordered-food-price">
            <p>$13.00</p>
            <div className="ordered-food-edit">
              {editWindow ? (
                <MdOutlineEditOff
                  className="order-edit"
                  onClick={() => setEditWindow((prev) => !prev)}
                />
              ) : (
                <FiEdit3
                  className="order-edit"
                  onClick={() => setEditWindow((prev) => !prev)}
                />
              )}
              {editWindow && (
                <div className="edit-window">
                  <p>QUANTITY</p>
                  <div className="quantity-btn">
                    <button
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                    >
                      -
                    </button>
                    <p>{quantity > 0 ? quantity : 1}</p>
                    <button onClick={() => setQuantity((prev) => prev + 1)}>
                      +
                    </button>
                  </div>
                </div>
              )}
              <RiDeleteBin5Line className="order-delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
