"use client";
const AddToCart = () => {
  return (
    <button
    className="btn btn-primary"
      onClick={() => {
        alert("Product Selected");
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
