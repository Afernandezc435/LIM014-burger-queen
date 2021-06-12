import React from "react";

const Products = ({ product, cart, setCart, Products }) => {
  const { id, name, price, img } = product;

  const addListProduct = () => {
    const existProduct = cart.find((products) => products.id === product.id);
    if (existProduct) {
      setCart(
        cart.map((products) =>
          products.id === product.id
            ? { ...existProduct, quantity: existProduct.quantity + 1 }
            : products
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <section className="containerCards">
      <section>
        <div class="contentCards">
          <div class="previewCards">
            {Products ? <img src={img} alt="coffe" width="80px" /> : <></>}
          </div>
          <div class="infoCards">
            <section>{name}</section>
            {Products ? <section>${price}</section> : <></>}
            {Products ? (
              <button
                className="btnAdd"
                type="button"
                onClick={() => addListProduct(id)}
              >
                Agregar
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Products;
