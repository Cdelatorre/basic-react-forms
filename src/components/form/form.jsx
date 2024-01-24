import { useState } from "react";

const Form = () => {
  const [body, setBody] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: false, password: false })

  const handleOnChange = (ev) => {
    const name = ev.target.name; // 'email' | 'password'
    const value = ev.target.value; // a | b

    setErrors((prev) => { // reset error of that [name] input
      return ({
        ...prev,
        [name]: false
      })
    })

    setBody((prev) => { // { email: '', password: '' } |  { email: 'a', password: '' }
      return ({
        ...prev,//  email: '', password: '' | email: 'a', password: ''
        [name]: value // email: 'a', password: '' |  email: 'a', password: 'b'
      })
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault(); // para que no se haga un GET por defecto que haría el <form></form> nativamente

    Object.keys(body).forEach(key => { // ['email', 'password']
      if (!body[key]) {                // 1. body['email'] = '' -> true
        setErrors((prev) => {          // 2. prev -> errors -> { email: false, password: false }
          return ({                    // 3. el return del callback del useState es el nuevo valor
            ...prev,                   // 4.  email: false, password: false
            [key]: true                // 5. 'email': true
          })
        })                             // 6. { email: true, password: false }
      }
    })
  }

  return (
    <form>
      <h1 className="mb-4">Login form</h1>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input onChange={handleOnChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        {errors.email && <div className="text-danger small">
          Please provide a valid email.
        </div>}
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input onChange={handleOnChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
        {errors.password && <div className="text-danger small">
          Please provide a valid password.
        </div>}
      </div>
      <button onClick={handleSubmit} type="submit" className="btn w-100 btn-primary">Submit</button>
    </form>

  );
};

export default Form;
