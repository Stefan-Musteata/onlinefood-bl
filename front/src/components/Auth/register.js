import React, {useState} from 'react'
import axios from 'axios'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = (name, email, password) => {
    console.log(name, email, password);

    axios.post('/server/api/user-register', { name: name, email: email, password: password })
      .then(res => {
        if (res) { localStorage.setItem('usertoken', res.data.token)
          window.location.href = "/products";
         }
      })

  }


  return (
    <div className="row justify-content-center">
      <div className="col-sm-9 col-md-7 col-lg-6 col-xl-6">
        <div className="card p-4">

          <div className="text-center py-2 mb-4"><h2>Inregistrare</h2></div>
          
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-4 col-form-label">Nume si Prenume</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
          <div className="col-sm-8">
            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="pswd" className="col-sm-4 col-form-label" >Parola</label>
          <div className="col-sm-8">
            <input type="password" className="form-control" id="pswd" onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>

        <button className="btn btn-success" onClick={() => register(name, email, password)}>Inregistrare</button>
        </div>
      </div>
    </div>
  )
}

export default Register