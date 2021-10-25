import React, { useState, useEffect} from "react"
import axios from 'axios'

const Cabinet = () => {
  const [my_orders, setMyorders] = useState([])
  const [message, setMessage] = useState('')

  //delete the modal
  if (document.querySelector('.modal-backdrop')) {
    document.querySelector('.modal-backdrop').remove()
  }
  
  const  authorizationToken = () => {
    axios.defaults.headers = {
      Authorization: `Bearer ${localStorage.usertoken}`,
      Accept: "application/json",
    }
  }

  useEffect(() => {
    authorizationToken()
    axios.get('/server/api/cabinet/my-cart')
    .then(res => {
      setMyorders(res.data)
    })
    .catch((error) => { console.log(error) })
  }, [])

  const finalOrder = () => {
    authorizationToken()
 
    axios.post(`/server/api/cabinet/final-order`)
      .then(res => {
        console.log(res.data);
        setMessage(res.data)
      })
  }

  const sum = my_orders.length === 0 || my_orders.filter(item => item.status === null ).length === 0 ? '' : my_orders.filter(item => item.status === null ).map(item => Number(item.total_price)).reduce(function(a, b){ return a + b}) 

  return (
    <div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col" >
              id
            </th>
            <th scope="col">Name</th>
            <th scope="col">
              Pret
            </th>
            <th scope="col">
              Cantitatea
            </th>
            <th scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {my_orders.map((item,i) => (
            <tr key={item.id}>
              <th className="align-middle">{i+1}</th>
              <td>
                <img src={`/storage/images/products/${item.products_img.img}`} alt="img" width="90" className="border p-1 rounded mr-3"/>
                {item.name}
                </td>
              <td className="align-middle">{item.total_price} Lei</td>
              <td className="align-middle">
                <button type="button" className="btn btn-sm btn-danger">
                  -
                </button>
                <span className="mx-3">{item.quantity} Buc</span>
                <button type="button" className="btn btn-sm btn-success">
                  +
                </button>
              </td>
              <td className="align-middle">
                <span className="text-success text-capitalize">
                  {item.status === null ? message && 'success' : item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="d-flex justify-content-between bd-highlight">
      <button className="btn btn-success" onClick={finalOrder}>Finalizeaza comanda</button>
      <div className="total-sum">
        <h2>
          <strong>Suma totala: </strong> {sum} Lei
        </h2>
      </div>
      </div>
      {message && <h1 className={`text-center py-5" ${message.success === true ? 'text-success' : 'text-danger'} `} >{message.message}</h1> }
    </div>
  )
}
export default Cabinet