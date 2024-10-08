// const addEl = document.createElement("p");
// addEl.innerText = "Added from React";
// document.getElementById("root").appendChild(addEl);
// console.log(addEl)

// for react

// const reactEl =(
    // <div>
    //     <div className= "card-container max-w-md shadow-lg">
    //   <div className= "inner-card text-center">
    //     <h1 className= "text-3xl font-extrabold text-[#380546]">Next-Level Cart 🚀</h1>

    //     <div className= "mt-5">
    //       <p className= "text-lg font-bold text-[#380546]">Product: Next level web development Course</p>
    //       <p className= "text-2xl font-bold price-text mt-2">৳ 6500</p>
    //     </div>

    //     <div className= "flex justify-between items-center mt-6">
    //       <button
    //         id="addToCartButton"
    //         className= "gradient-button text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
    //       >
    //         Add to Cart
    //       </button>
    //       <div className= "text-left">
    //         <p id="itemCount" className= "text-lg font-bold item-text">Items in Cart: 0</p>
    //         <p id="totalPrice" className= "text-lg font-bold item-text">Total Price: ৳ 0</p>
    //       </div>
    //     </div>

    //     <div id="successMessage" className= "hidden text-[#01FF8E] font-semibold text-center mt-5">
    //       Item added to the cart!
    //     </div>
    //   </div>
    // </div>
    // </div>
// )
// // const myEl = React.createElement("p", null, "Added from React by render");
// ReactDOM.createRoot(document.getElementById("root")).render(reactEl);






// react function 

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

function ProductCart() {
  // State for tracking the number of items and total price
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const pricePerItem = 6500;

  // Event handler for adding items to the cart
  const handleAddToCart = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + pricePerItem);
  };

  return (
    <div className="card-container max-w-md shadow-lg">
      <div className="inner-card text-center">
        <h1 className="text-3xl font-extrabold text-[#380546]">
          Next-Level Cart 🚀
        </h1>

        <div className="mt-5">
          <p className="text-lg font-bold text-[#380546]">
            Product: Next Level Web Development Course
          </p>
          <p className="text-2xl font-bold price-text mt-2">৳ 6500</p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleAddToCart}
            className="gradient-button text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
          >
            Add to Cart
          </button>
          <div className="text-left">
            <p className="text-lg font-bold item-text">
              Items in Cart: {count}
            </p>
            <p className="text-lg font-bold item-text">
              Total Price: ৳ {totalPrice}
            </p>
          </div>
        </div>

        <div
          id="successMessage"
          className="hidden text-[#01FF8E] font-semibold text-center mt-5"
        >
          Item added to the cart!
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<>
<ProductCart></ProductCart>
<ProductCart></ProductCart>
<ProductCart></ProductCart>
</>);
