import React, { Fragment, useState, useEffect} from "react"
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

const Products = () => {

  const [products, setProducts] = useState([])
  const [item, setItem] = useState({user_id: '', product_id: '', quantity: '', name: '', img: '', price: '', weight: '', type: ''})
  const [count, setCount] = useState(1)
  const [message, setMessage] = useState('')

  //Authorization token
  const  authorizationToken = () => {
    axios.defaults.headers = {
      Authorization: `Bearer ${localStorage.usertoken}`,
      Accept: "application/json",
    }
  }

  useEffect(() => {
    axios.get('/server/api/products')
    .then(res => {
      setProducts(res.data)
    })
    .catch((error) => { console.log(error) })

  }, [])
  
  const handleClickModal = (i) => {
    const product = products[i]
    setItem({
      product_id: product.id,
      img: product.img,
      name: product.name,
      price: product.price,
      weight: product.weight,
      type: product.type
    })
    setCount(1)
    setMessage('')
  }

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count <= 1 ?  1 : count-1)
  }

  const addProduct = (product_id, name, total_price) => {
    authorizationToken()
    const input_name = {
      product_id: product_id,
      quantity: count,
      name: name,
      total_price: total_price 
    }
    axios.post(`/server/api/add-product/${product_id}`, input_name)
      .then(res => {
        setMessage(res.data.message)
        //setTimeout(() => { setMessage('') }, 3000)
      })
  } 
  

  return (
    <Fragment>
      <div className="row row-cols-1 row-cols-md-3">
        {
          products.map((product, i) => 
          <div className="col mb-4" key={i}>

            <div className="card shadow-sm">
              <img src={`/storage/images/products/${product.img}`} className="card-img-top" alt={product.name} />
              <div className="card-body ">
                <h4 className="card-title mb-4">{product.name}</h4>
                  <div className="d-flex justify-content-between bd-highlight border-bottom mb-3">
                  <p className="card-text"><strong>Tip</strong>: {product.type}</p>
                  <p className="card-text"><strong>Greutate</strong>: {product.weight} {product.type === 'food' ? 'gr' : 'ml'}</p>
                  <p className="card-text"><strong>Pret</strong>: {product.type}</p>
                </div>
                
                <h5 className="d-flex justify-content-between bd-highlight">
                  <strong className="text-danger align-self-center">{product.price} Lei </strong> 
                  <button className="btn btn-md  btn-success" onClick={() => handleClickModal(i)} data-toggle="modal" data-target="#add-product">Adaugă</button>
                </h5>
              </div>
            </div>
     
          </div>
        )}
      </div>

      {/* Form Modal */}
        <div className="modal fade" id="add-product" >
          <div className="modal-dialog modal-dialog-centered" >
             
              <div className="modal-content">
              {localStorage.usertoken  ?
                    <Fragment>
                      <div className="modal-header">
                          <h5 className="modal-title ">
                            {item.name}
                          </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                  
                      <div className="modal-body">    
                        <div className="card border-0" >
                          <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={`/storage/images/products/${item.img}`} className="card-img-top" alt={item.name} /> 
                            </div>
                            <div className="col-md-8">
                              <div className="card-body py-0">
                                <h5 className="card-title"><strong>Pret: </strong>{item.price*count} Lei</h5>
                                <p className="card-text"><strong>Masa: </strong>{item.weight} {item.type === 'food' ? 'gr' : 'ml'}</p>
                                <div className="card-text d-flex">
                                  <button className="btn btn-danger" onClick={decrement}>-</button> 
                                    <h2 className="mx-3">{count}</h2>
                                  <button className="btn btn-success" onClick={increment}>+</button> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {message && <div className="text-center text-success py-3">{message} <br /> <a href="/cabinet" >Click in coș</a></div>}
                      <div className="border-top py-2 text-center">
                          <button type="button" className="btn btn-success btn-md waves-effect" onClick={() => addProduct(item.product_id, item.name, item.price*count)}>Adaugă in coș</button>
                      </div>
                    </Fragment>
                     :
            
                     <div className="modal-body">
                       Trebuie sa te loghezi sau inregistreaza-te, <a href="/login">click la <strong>Logare</strong></a>
                     </div>
                    
                   }
              </div>
           
          </div>
        </div>
    </Fragment>

  )
}
export default withRouter(Products)