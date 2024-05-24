import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Admin() {
  const [info, setinfo] = useState([])
  const [value, setvalue] = useState("")
  const [change, setchange] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/mehsullar')
      .then(res => setinfo(res.data))
  }, [])


  const searchData = () => {
    return info.filter(inf => {
      return inf.name?.toUpperCase().startsWith(value.toUpperCase())
    })
  }

  const filterData = () => {
    if (change == 'AtoZ') {
      return searchData().toSorted((a,b)=>a.name-b.name)
    }
    else if (change == 'AtoZ') {
      return searchData().toSorted((a,b)=>b.name-a.name)
    }
    else {
      return [...searchData()]
    }
  }

  return (

    <div className='d-flex flex-column align-items-center '>

      <input type="text" placeholder='Search' className='m-3 p-1 w-50' onInput={(e) => setvalue(e.target.value)} />
      <select onChange={(e)=>setchange(e.target.value)}>
        <option value={'def'}>Default</option>
        <option value={'AtoZ'}>A-Z</option>
        <option value={'ZtoA'}>Z-A</option>
      </select>

      <table className='container'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            filterData().map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td><div className='boxes'><img src={el.image} alt="" /></div></td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <Link to='/add'><button className='btn btn-outline-danger w-100'>Add</button></Link>

    </div>
  )
}

export default Admin