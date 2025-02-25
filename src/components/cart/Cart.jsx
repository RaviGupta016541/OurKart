import React, { useState, useContext } from 'react';
import { store } from '../../App';

const Cart = () => {
  const { cart,setCart }= useContext(store);

  // Update quantity
  const updateQuantity = (id, increment) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + increment;

        // Check if the new quantity exceeds the maximum limit of 3
        if (newQuantity > 3) {
          alert('You can only order a maximum of 3 items for any product.');
          return item; // Return the item without updating the quantity if the limit is exceeded
        }

        // Otherwise, update the quantity with a minimum of 1
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    }));
  };

  // Remove item from cart
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  // Calculate total price
  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + item.price * 10 * item.quantity, 0);
    return total.toFixed(2);
  };

  // Handle checkout
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div className="container my-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Your cart is empty. Please add items to your cart.
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>₹{(item.price * 10).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </td>
                    <td>₹{((item.price * 10) * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between">
            <h4>Total: ₹{calculateTotal()}</h4>
            <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
