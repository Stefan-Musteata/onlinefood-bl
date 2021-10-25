import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const login = (email, password) => {
    
    axios.post('/server/api/user-login', { email: email, password: password })
      .then(res => {
        if (res) { localStorage.setItem('usertoken', res.data.token)
          window.location.href = "/products";
         }
      })
      .catch(err => {
        setMessage(err.response.data.error);
      })

  }


  return (
    <div className="row justify-content-center">
      <div className="col-sm-9 col-md-7 col-lg-5 col-xl-5">
        <div className="card p-4">

          <div className="text-center py-2 mb-4"><h2>Logare</h2></div>
          
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-3 col-form-label">Email.</label>
          <div className="col-sm-9">
            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="pswd" className="col-sm-3 col-form-label" >Parola</label>
          <div className="col-sm-9">
            <input type="password" className="form-control" id="pswd" onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        {message && <div className="text-center text-danger py-3">{message}</div>}
        <button className="btn btn-success" onClick={() => login(email, password)}>Logare</button>
        </div>
      </div>
    </div>
  )
}

export default Login