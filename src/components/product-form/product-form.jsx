import { useState } from 'react';

const DEFAULT_PRODUCT_STATE = { title: '', price: '' }

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState(DEFAULT_PRODUCT_STATE)

  const handleOnChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setProduct((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  return (
    <form className="mt-4">
      <h5 className="text-secondary">Product Form</h5>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
        <input value={product.title} className="form-control" onChange={handleOnChange} type="text" name="title" id="title" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
        <input value={product.price} onChange={handleOnChange} className="form-control" type="number" name="price" id="price" />
      </div>

      <button onClick={(ev) => {
        ev.preventDefault();
        onSubmit(product)
        setProduct(DEFAULT_PRODUCT_STATE)
      }} className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
