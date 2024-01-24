import { useState } from "react";
import Card from "../../components/card/card";
import ProductForm from "../../components/product-form/product-form";

const ProductList = () => {
  const [products, setProducts] = useState([])

  const handleOnSubmit = (product) => {
    setProducts((prev) => {
      return ([...prev, { ...product, id: (Math.random() + 1).toString(36).substring(7) }])
    })
  }

  const handleOnDelete = (id) => {
    const newProducts = products.filter(product => product.id !== id)
    setProducts(newProducts)
  }

  return (
    <div className="container w-100 mt-5">
      <h1>Product List</h1>

      <div className="row">
        <div className="col-4">
          <ProductForm onSubmit={handleOnSubmit} />
        </div>
        <div className="col-8">
          {products.map((product, index) => {
            return (
              <Card onDelete={handleOnDelete} id={product.id} key={product.id} title={product.title} price={product.price} />
            )
          })}
        </div>
      </div>

    </div>
  );
};

export default ProductList;
