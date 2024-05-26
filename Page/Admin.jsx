import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



function Admin() {
  const [info, setinfo] = useState([])
  const [search, setsearch] = useState("")
  const [value, setvalue] = useState('def')

  useEffect(() => {
    axios.get('http://localhost:3000/mehsullar')
      .then(res => setinfo(res.data))
  }, [])


  const searchData = info.filter(inf => {
    return (
      inf.name.toUpperCase().startsWith(search.toUpperCase())
    )
  })

  const filterData = () => {
    if (value == 'AtoZ') {
      return [...searchData].sort((a, b) => a.price - b.price);
    }
    else if (value == 'ZtoA') {
      return [...searchData].sort((a, b) => b.price - a.price);
    }
    else {
      return [...searchData];
    }
  }

  let {id} = useParams()

  const deleteFunction = (id) => {
      axios.delete('http://localhost:3000/mehsullar/'+id)
  }

  return (

    <div className='d-flex flex-column align-items-center '>

      <input type="text" placeholder='Search' className='m-3 p-1 w-50' onInput={(e) => setsearch(e.target.value)} />
      <select onChange={(e) => setvalue(e.target.value)}>
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead >
        <tbody>
          {
            filterData().map((el,i) => {
              return (
                <tr key={i}>
                  <td>{el.id}</td>
                  <td><div className='boxes'><img src={el.image} alt="" /></div></td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td><Link to={'/edit/'+el.id}><button className='btn btn-outline-secondary'>Edit</button></Link></td>
                  <td><button onClick={()=>deleteFunction(el.id)}  className='btn btn-outline-secondary'>Delete</button></td>
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