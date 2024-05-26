import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Edit() {
    const { register, handleSubmit } = useForm({defaultValues: async () => fetch('http://localhost:3000/mehsullar/')})
    const [info, setinfo] = useState([])
    const [image, setimage] = useState(null)

    let {id} = useParams();

    useEffect(() => {
      axios.get('http://localhost:3000/mehsullar/'+id)
      .then(res=>setinfo(res.data))
    }, [])
    

    const onSubmit = (data) => {
        axios.patch('http://localhost:3000/mehsullar/'+id,{...data, image:image}) 
    }
    
    const convertToBase64 = (file) => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setimage(reader.result)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 align-items-center mt-5'>
    <label>
        Ad :
        <input {...register("name")} defaultValue={info.name} />

    </label>
    <label>Qiymet:
        <input {...register("price")} defaultValue={info.price} />
    </label>

    <label>Image:
        <input type="file" onInput={(e)=>convertToBase64(e.target.files[0])}/>
    </label>

    

    <input className='btn btn-outline-danger' type="submit" />
</form>
  )
}

export default Edit