import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BestSellers() {
    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/mehsullar')
            .then(res => setinfo(res.data))
    }, [])



    return (
        <>


            <div className="container mt-5">
                <div className="row">
                    {
                        info.map((el) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-3">
                                    <img src={el.image} alt="" />
                                    <h2>{el.name}</h2>
                                    <p>{el.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </>
    )
}

export default BestSellers