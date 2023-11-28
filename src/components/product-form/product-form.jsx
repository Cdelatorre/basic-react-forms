import { useState } from 'react';

const DEFAULT_PRODUCT_STATE = { title: '', price: '' }

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState(DEFAULT_PRODUCT_STATE)
  const [errors, setErrors] = useState({})

  const handleOnChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setErrors((prev) => {
      return ({
        ...prev,
        [name]: ''
      })
    })

    setProduct((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  const validateForm = () => {
    const errors = {}

    if (!product.title) {
      errors.title = 'Title is required'
    }

    if (!product.price) {
      errors.price = 'Price is required'
    }

    return errors
  }

  const handleOnSubmit = (ev) => {
    ev.preventDefault();

    console.log(product)
    const errors = validateForm()

    if (Object.keys(errors).length) {
      setErrors(errors)
      return
    }

    onSubmit(product)
    setProduct(DEFAULT_PRODUCT_STATE)
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

      {errors.title && <p className="text-danger">{errors.title}</p>}
      {errors.price && <p className="text-danger">{errors.price}</p>}

      <button onClick={(ev) => {
        ev.preventDefault();
        handleOnSubmit(ev)
      }} className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
